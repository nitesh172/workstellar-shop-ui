'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import {
  clientType,
  commitmentType,
  InitalContactForm,
  projectPeriod,
  timeperiod,
} from '@/utils/config'
import { useFormik } from 'formik'
import { useCaller } from '@/utils/API'
import { HttpMethod } from '@/types'
import toast from 'react-hot-toast'
import { useAppContext } from '@/context/AppContext'
import { object, string } from 'yup'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const TextField = dynamic(() => import('@/components/Input/TextField'))
const DropDown = dynamic(() => import('@/components/Dropdown/Dropdown'))
const ContactDetailWithForm = dynamic(() => import('../ContactDetailWithForm'))

const ContactSection = () => {
  const { translate } = useAppContext()

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

  const ContactFormSchema = object({
    fullName: string()
      .required(translate('_FULL_NAME_ERROR_', 'Full name is required'))
      .matches(
        /^[a-zA-Z0-9 .ÆØÅæøå]{1,40}$/,
        translate('_INVALID_CHARTER_ERROR_', 'Invalid characters used')
      )
      .max(30, 'Exceeding maximum character limit'),
    email: string()
      .required(translate('_EMAIL_REQUIRED_ERROR_', 'Email is required'))
      .email(translate('_INVALID_EMAIL_ERROR_', 'Invalid email format')),
    phoneNumber: string()
      .required(
        translate('_PHONE_NUMBER_REQUIRED_ERROR_', 'Phone Number is required')
      )
      .matches(
        /(^\([0-9]{3}\) [0-9]{3}\-[0-9]{4}$)|(^[0-9]{10,11}$)|(^\+[0-9]{1,3} [0-9]{10,11}$)/,
        translate('_INVALID_PHONE_NUMBER_ERROR_', 'Invalid phone number format')
      ),
    clientType: string().required(
      translate('_CLIENT_TYPE_REQUIRED_ERROR_', 'Client type is required')
    ),
    companyName: string().required(
      translate('_COMPANY_NAME_REQUIRED_ERROR_', 'Company Name is required')
    ),
    skills: string().required(
      translate('_SKILLS_REQUIRED_ERROR_', 'Please enter skills')
    ),
    commitment: string().required(
      translate('_COMMITMENT_REQUIRED_ERROR_', 'Please select commitment')
    ),
    onboardPeriod: string().required(
      translate(
        '_ONBOARD_PERIOD_REQUIRED_ERROR_',
        'Please select onboard period'
      )
    ),
    projectPeriod: string().required(
      translate(
        '_PROJECT_PERIOD_REQUIRED_ERROR_',
        'Please select project period'
      )
    ),
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
          label={translate('_FULL_NAME_', 'Full name')}
          placeholder={translate('_NAME_', 'Name')}
          name="fullName"
          value={values}
          error={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="flex flex-col xl:flex-row gap-6">
          <TextField
            label={translate('_PHONE_NUMBER_', 'Phone number')}
            placeholder={translate('_NUMBER_', 'Number')}
            className="flex-1"
            name="phoneNumber"
            value={values}
            error={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            label={translate('_MAIL_ID_', 'Mail ID')}
            placeholder={translate('_MAIL_ID_', 'Mail ID')}
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
            label={translate('_SELECT_TYPE_', 'Select type')}
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
            label={translate('_COMPANY_NAME_', 'Company Name')}
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
          label={translate(
            '_HOW_LONG_PROJECT_',
            'How long will the project last'
          )}
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
          label={translate(
            '_CHOOSE_SKILL_TYPE_NEED_',
            'What type of skills do you need?'
          )}
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
          label={translate('_COMMITMENT_NEED_', 'What commitment do you need?')}
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
          label={translate(
            '_WHEN_START_TEXT_',
            'When should your new member of the team start?'
          )}
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
        <Button
          text={translate('_SUBMIT_', 'Submit')}
          type="submit"
          submitLoading={isSubmitting}
          dark
        />
      </form>
    </ContactDetailWithForm>
  )
}

export default ContactSection
