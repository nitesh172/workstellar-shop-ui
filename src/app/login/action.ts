'use server'
import { LoginUser } from '@/types'
import { baseURI } from '@/utils/config'
import Cryptr from 'cryptr'
import { cookies } from 'next/headers'

export async function singIn(user: LoginUser) {
  let secert = process.env.NEXT_PUBLIC_SCERET

  const cryptr = new Cryptr(secert || '')

  let res = await fetch(baseURI + 'auth/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  if (!res.ok) {
    return await res.json()
  }

  let result: { token: string; expires: number } = await res.json()

  const encryptedSessionData = cryptr.encrypt(result.token) // Encrypt your session data
  cookies().set('workStellarToken', encryptedSessionData, {
    maxAge: result.expires,
  })
}
