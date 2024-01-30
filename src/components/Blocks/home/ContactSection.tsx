'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import {
  clientType,
  commitmentType,
  InitalContactForm,
  projectPeriod,
  timeperiod,
  workType,
} from '@/utils/config'
import { useFormik } from 'formik'
import { ContactFormSchema } from '@/utils/config/schemas'
import { useCaller } from '@/utils/API'
import { HttpMethod } from '@/types'
import toast from 'react-hot-toast'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const TextField = dynamic(() => import('@/components/Input/TextField'))
const DropDown = dynamic(() => import('@/components/Dropdown/Dropdown'))
const ContactDetailWithForm = dynamic(() => import('../ContactDetailWithForm'))

const ContactSection = () => {
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
    initialValues: InitalContactForm,
    validationSchema: ContactFormSchema,
    onSubmit: (values) => {
      createRequest('requests/new', values)
    },
  })

  return (
    <ContactDetailWithForm label="Contact us" id="Contact us">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border p-5 md:p-10 flex flex-col gap-6"
      >
        <TextField
          label="Full name"
          placeholder="Name"
          name="fullName"
          value={values}
          error={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="flex flex-col xl:flex-row gap-6">
          <TextField
            label="Phone number"
            placeholder="Number"
            className="flex-1"
            name="phoneNumber"
            value={values}
            error={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            label="Mail ID"
            placeholder="Mail ID"
            className="flex-1"
            name="email"
            value={values}
            error={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-6">
          <DropDown
            availableOptionKey="name"
            primary
            className="flex-1"
            label="Select type"
            availableOptions={clientType}
            selectOptionKey="value"
            setOption={handleChange}
            name="clientType"
            option={clientType.find((type) => type.value === values.clientType)}
            error={errors}
            touched={touched}
            onBlur={handleBlur}
          />
          <TextField
            label="Company Name"
            placeholder="Vector Company"
            className="flex-1"
            name="companyName"
            value={values}
            error={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <DropDown
          availableOptionKey="name"
          primary
          className="flex-1"
          label="How long will the project last"
          selectOptionKey="value"
          availableOptions={projectPeriod}
          setOption={handleChange}
          name="projectPeriod"
          option={projectPeriod.find(
            (type) => type.value === values.projectPeriod
          )}
          error={errors}
          touched={touched}
          onBlur={handleBlur}
        />
        <TextField
          label="Choose type of skills you need"
          placeholder="React Native"
          name="skills"
          value={values}
          error={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <DropDown
          availableOptionKey="name"
          primary
          label="What commitment do you need"
          availableOptions={commitmentType}
          setOption={handleChange}
          selectOptionKey="value"
          name="commitment"
          option={commitmentType.find(
            (type) => type.value === values.commitment
          )}
          error={errors}
          touched={touched}
          onBlur={handleBlur}
        />
        <DropDown
          availableOptionKey="name"
          primary
          label="When should your new member of the team start?"
          availableOptions={timeperiod}
          setOption={handleChange}
          name="onboardPeriod"
          selectOptionKey="value"
          option={timeperiod.find(
            (type) => type.value === values.onboardPeriod
          )}
          error={errors}
          touched={touched}
          onBlur={handleBlur}
        />
        <Button text="Submit" type="submit" submitLoading={isSubmitting} dark />
      </form>
    </ContactDetailWithForm>
  )
}

export default ContactSection
