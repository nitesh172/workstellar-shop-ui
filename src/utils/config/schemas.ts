import { object, string } from 'yup'

export const ContactFormSchema = object({
  fullName: string()
    .required('Full name is required')
    .matches(/^[a-zA-Z0-9 .ÆØÅæøå]{1,40}$/, 'Invalid characters used')
    .max(30, 'Exceeding maximum character limit'),
  email: string().required('Email is required').email('Invalid email format'),
  phoneNumber: string()
    .required('Phone Number is required')
    .matches(
      /(^\([0-9]{3}\) [0-9]{3}\-[0-9]{4}$)|(^[0-9]{10,11}$)|(^\+[0-9]{1,3} [0-9]{10,11}$)/,
      'Invalid phone number format'
    ),
  clientType: string().required('Client type is required'),
  companyName: string().required('Company Name is required'),
  skills: string().required('Please enter skills'),
  commitment: string().required('Please select commitment'),
  onboardPeriod: string().required('Please select onboard period'),
  projectPeriod: string().required('Please select project period'),
})
