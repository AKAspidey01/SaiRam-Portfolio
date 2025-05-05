import * as yup from 'yup';
import { ref } from "yup";


export const contactFormValidation = yup.object().shape({
    email: yup.string().email('Please Enter Valid Email').required('Email Address Required'),
    name: yup.string().required('Please Enter First Name'),
    number: yup.number().required('Please Enter Your Mobile Number').min(10 , "Minimum 10 Digits"),
    message: yup.string().notRequired(''),
})