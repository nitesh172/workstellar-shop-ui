'use client'
import { useAuthContext } from '@/context/AuthContext'
import { loginSchema, registerUser, userType } from '@/utils/config'
import { deleteCookie } from 'cookies-next'
import { useFormik } from 'formik'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Country, State, City } from 'country-state-city'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const DropDown = dynamic(() => import('@/components/Dropdown/Dropdown'))
const TextField = dynamic(() => import('@/components/Input/TextField'))

const DetailForm = () => {
  const { currentUser, isAuthenticated, setIsAuthenticated, setPath } =
    useAuthContext()

  const router = useRouter()

  const [countryCode, setCountryCode] = useState<string>('')
  const [stateCode, setStateCode] = useState('')

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
    setValues,
  } = useFormik({
    initialValues: registerUser,
    validationSchema: loginSchema,
    onSubmit: (values) => {},
  })

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      setValues(currentUser)
      let countryCode =
        Country.getAllCountries().find(
          (country) => country.name === currentUser.country
        )?.isoCode || ''
      setCountryCode(countryCode)
      let stateCode =
        State.getStatesOfCountry(countryCode).find(
          (state) => state.name === currentUser.state
        )?.isoCode || ''
      setStateCode(stateCode)
    }
  }, [currentUser])

  useEffect(() => {
    if (isAuthenticated !== null && !isAuthenticated) {
      router.push('/login')
      setPath('/profile')
    }
  }, [isAuthenticated])

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border p-5 md:p-10 w-full flex flex-col gap-10">
      <div className="text-2xl font-bold">Details</div>
      <div className="flex flex-col gap-6">
        <TextField
          label="Enter your email ID"
          placeholder="Johncooper@gmail.com"
          name="email"
          value={values}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors}
          touched={touched}
        />
        <Button
          text="Update email ID"
          dark
          className="w-full min-[425px]:w-fit"
        />
        <DropDown
          availableOptionKey="role"
          primary
          isDisabled
          label="Select type"
          option={values}
          selectOptionKey=""
          availableOptions={Country.getAllCountries()}
          setOption={(e: any) => {
            setCountryCode(e.target.value.isoCode)
            handleChange({
              target: { name: e.target.name, value: e.target.value.name },
            })
          }}
          onBlur={handleBlur}
          error={errors}
          touched={touched}
        />
        <TextField
          label="Company name"
          value={values}
          name="entityName"
          placeholder="Vector Company"
        />
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <DropDown
            availableOptionKey="name"
            primary
            label="Country"
            option={{ name: values.role }}
            availableOptions={Country.getAllCountries()}
            setOption={(e: any) => {
              setStateCode(e.target.value.isoCode)
              handleChange({
                target: { name: e.target.name, value: e.target.value.name },
              })
            }}
            onBlur={handleBlur}
            error={errors}
            touched={touched}
          />
          <DropDown
            availableOptionKey="name"
            primary
            label="State"
            option={{ name: values.state }}
            availableOptions={State.getStatesOfCountry(countryCode)}
            setOption={(e: any) => {
              setStateCode(e.target.value.isoCode)
              handleChange({
                target: { name: e.target.name, value: e.target.value.name },
              })
            }}
            onBlur={handleBlur}
            error={errors}
            touched={touched}
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <DropDown
            availableOptionKey="name"
            primary
            className="flex-1"
            option={{ name: values.city }}
            label="City"
            availableOptions={City.getCitiesOfState(countryCode, stateCode)}
            setOption={handleChange}
            onBlur={handleBlur}
            error={errors}
            touched={touched}
          />
          <TextField
            label="Zipcode"
            value={values}
            placeholder="10001"
            name="zipcode"
            className="flex-1"
            onBlur={handleBlur}
            error={errors}
            touched={touched}
          />
        </div>
      </div>
      <Button
        text="Save"
        type="submit"
        submitLoading={isSubmitting}
        dark
        className="w-full md:w-fit lg:w-full xl:w-fit"
      />
      <Button
        text="Log out"
        type="button"
        onClick={() => {
          setIsAuthenticated(false)
          deleteCookie('workStellarToken')
        }}
        className="w-full min-[425px]:w-auto"
      />
    </form>
  )
}

export default DetailForm
