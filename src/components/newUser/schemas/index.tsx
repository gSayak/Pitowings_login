import * as Yup from "yup";
import { useTranslation } from "react-i18next";
export const NewuserSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your firstname"),
  lastName: Yup.string().min(2).max(25).required("Please enter your lastname"),
  email: Yup.string().email().required("Please enter your email"),
  phoneNumber: Yup.string()
    .min(10)
    .max(10)
    .required("please enter your phone number"),
  companyName: Yup.string().required("Please enter your company name"),
  jobTitle: Yup.string().required("please enter your job Title"),
  password: Yup.string().min(6).required("Please enter your password"),
  checkbox: Yup.boolean().oneOf([true], "Please accept terms and conditions"),
  confrimPassword: Yup.string()
    .required("Please enter your confirm password")
    .oneOf([Yup.ref("password")], "Password should match"),
});
