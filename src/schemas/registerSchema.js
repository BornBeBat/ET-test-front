import * as yup from 'yup';
import { emailRegExp } from '../constant/emailRegExp';

export const registerSchema = yup.object({
  name: yup
    .string()
    .required('Full name is required')
    .max(30, 'Max length must be less than 30 chars'),
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegExp, 'Enter a valid email')
    .max(30, 'Max length must be less than 30 chars'),
  birthDate: yup.string().required('Date of birth is required'),
  from: yup.string().required('please select where did you hear about this event'),
});
