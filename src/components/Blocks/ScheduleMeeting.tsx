'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { useAppContext } from '@/context/AppContext'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { useCaller } from '@/utils/API'
import { HttpMethod } from '@/types'
import toast from 'react-hot-toast'
const Calender = dynamic(() => import('../Calender'))
const Button = dynamic(() => import('@/components/Buttons/Button'))
const TextField = dynamic(() => import('@/components/Input/TextField'))

const ScheduleMeeting = () => {
  const { translate } = useAppContext()
  const[date, setDate] = useState<string>('')

  const ContactFormSchema = object({
    email: string()
      .required(translate('_EMAIL_REQUIRED_ERROR_', 'Email is required'))
      .email(translate('_INVALID_EMAIL_ERROR_', 'Invalid email format')),
  })

  const { execute: createRequest } = useCaller({
    method: HttpMethod.POST,
    doneCb: (resp: any) => {
      if (!resp) return
      setSubmitting(false)
      toast.success(resp.message)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
      setSubmitting(false)
    },
  })

  const {
    errors,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    touched,
  } = useFormik({
    initialValues: { email: '' },
    validationSchema: ContactFormSchema,
    onSubmit: (values) => {
      createRequest('requests/schedule_meet', {...values, date})
    }
  })

  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 md:px-10 py-6 bg-white shadow-2xl flex flex-col gap-6 rounded-2xl"
    >
      <div className="text-lg md:text-2xl font-semibold">
        {translate('_LET_SCHEDULE_MEET_', 'Let’s schedule meeting')}
      </div>
      <Calender onChange={(e: Date) => setDate(e.toDateString())} />
      <TextField
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values}
        error={errors}
        touched={touched}
        label={translate('_YOUR_MAIL_ID_', 'Your mail ID')}
        placeholder="johncooper@gmail.com"
      />
      <Button
        text={translate('_SCHEDULE_MEET_', 'Schedule meet')}
        type='submit'
        submitLoading={isSubmitting}
        dark
      />
    </form>
  )
}

export default ScheduleMeeting
