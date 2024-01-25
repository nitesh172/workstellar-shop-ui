'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { registerUser, registerSchema, userType } from '@/utils/config'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const DropDown = dynamic(() => import('@/components/Dropdown/Dropdown'))
const TextField = dynamic(() => import('@/components/Input/TextField'))
import { Country, State, City } from 'country-state-city'
import { useFormik } from 'formik'
import { useCaller } from '@/utils/API'
import { HttpMethod } from '@/types'
import toast from 'react-hot-toast'

const RegisterForm = () => {
  const router = useRouter()

  const navigateToLogin = () => router.push('/login')

  const [countryCode, setCountryCode] = useState('')
  const [stateCode, setStateCode] = useState('')

  const { execute: createUser } = useCaller({
    method: HttpMethod.POST,
    doneCb: (resp: any) => {
      if (!resp) return
      setSubmitting(false)
      resetForm()
      toast.success(resp.message)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    setSubmitting,
    touched,
    setFieldError,
    resetForm,
  } = useFormik({
    initialValues: registerUser,
    validationSchema: registerSchema,
    onSubmit: (values) => createUser('auth/signup', values),
  })

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border p-5 md:p-10 flex flex-col gap-10"
    >
      <div className="text-2xl md:text-4xl font-bold">Registration</div>
      <div className="flex flex-col gap-6">
        <TextField
          label="Enter your email ID"
          placeholder="Johncooper@gmail.com"
          name="email"
          type="email"
          value={values}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors}
          touched={touched}
        />
        <DropDown
          availableOptionKey="name"
          primary
          label="Select type"
          availableOptions={userType}
          setOption={handleChange}
          name="role"
          onBlur={handleBlur}
          error={errors}
          selectOptionKey="value"
          touched={touched}
        />
        <TextField
          label="Company name"
          placeholder="Vector Company"
          name="entityName"
          onBlur={handleBlur}
          error={errors}
          value={values}
          onChange={handleChange}
          type="text"
          touched={touched}
        />
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <DropDown
            availableOptionKey="name"
            primary
            label="Country"
            onBlur={handleBlur}
            error={errors}
            availableOptions={Country.getAllCountries()}
            setOption={(e: any) => {
              setCountryCode(e.target.value.isoCode)
              handleChange({
                target: { name: e.target.name, value: e.target.value.name },
              })
            }}
            name="country"
            touched={touched}
          />
          <DropDown
            availableOptionKey="name"
            primary
            label="State"
            onBlur={handleBlur}
            error={errors}
            availableOptions={State.getStatesOfCountry(countryCode)}
            setOption={(e: any) => {
              setStateCode(e.target.value.isoCode)
              handleChange({
                target: { name: e.target.name, value: e.target.value.name },
              })
            }}
            name="state"
            touched={touched}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <DropDown
            availableOptionKey="name"
            primary
            className="flex-1"
            onBlur={handleBlur}
            label="City"
            availableOptions={City.getCitiesOfState(countryCode, stateCode)}
            setOption={handleChange}
            name="city"
            error={errors}
            selectOptionKey="name"
            touched={touched}
          />
          <TextField
            label="Zipcode"
            placeholder="10001"
            onBlur={handleBlur}
            className="flex-1"
            name="zipcode"
            error={errors}
            value={values}
            onChange={handleChange}
            touched={touched}
          />
        </div>
      </div>
      <div className="flex flex-col min-[425px]:flex-row gap-4">
        <Button
          type="submit"
          text="Register"
          submitLoading={isSubmitting}
          dark
          className="w-full min-[425px]:w-auto"
        />
        <Button
          text="Login"
          type="button"
          onClick={navigateToLogin}
          className="w-full min-[425px]:w-auto"
        />
      </div>
    </form>
  )
}

export default RegisterForm
