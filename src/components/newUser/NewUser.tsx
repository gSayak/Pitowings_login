import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { Formik, Form, useFormik } from "formik";
import Navbar from "./Navbar";
import { NewuserSchema } from "./schemas/index";
import { useTranslation } from "react-i18next";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  jobTitle: "",
  password: "",
  confrimPassword: "",
  checkbox: false,
};

const NewUser = () => {
  const { t } = useTranslation();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: NewuserSchema,
      onSubmit: (values: any, action: { resetForm: () => void }) => {
        console.log("prinitng the value so of HandleSubmit ", values);
        action.resetForm();
      },
    });

  console.log("printing error", errors);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <div className=" w-max mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="mt-3 md:w-9/12  md:mx-auto md:items-center md:-mx-40 md:justify-center  md:mt-3"
        >
          <div className=" w-full space-y-4">
            <h1 className="text-black  text-3xl font-bold">{t("New")}</h1>
            <p className="text-1xl font-semibold">{t("Personal")}</p>
            <div className=" w-full flex flex-col md:flex-row  md:space-x-10 md:items-center ">
              <label className=" space-y-3">
                <p className=" text-xs">{t("First")}</p>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("First1")}
                  style={{
                    background: "rgba(235, 235, 235, 1)",
                  }}
                  className="px-10 rounded-lg border border-[#EBEBEB] py-1  "
                />
                {errors.firstName && touched.firstName ? (
                  <p className=" text-xs  text-rose-200 ">
                    *{errors.firstName}
                  </p>
                ) : null}
              </label>
              <label className="space-y-3">
                <p className="text-xs">{t("Last")}</p>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("Last1")}
                  style={{
                    background: "rgba(235, 235, 235, 1)",
                  }}
                  className="px-10 rounded-lg border border-[#EBEBEB] py-1  "
                />
                {errors.lastName && touched.lastName ? (
                  <p className=" text-xs  text-rose-200 ">*{errors.lastName}</p>
                ) : null}
              </label>
            </div>
            <div className=" flex flex-col space-y-3 md:items-center md:flex-row md:space-x-10">
              <label className="space-y-3">
                <p className="text-xs">{t("Email")}</p>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("Email1")}
                  style={{
                    background: "rgba(235, 235, 235, 1)",
                  }}
                  className="px-10 rounded-lg border border-[#EBEBEB] py-1  "
                />
                {errors.email && touched.email ? (
                  <p className=" text-xs  text-rose-200 ">*{errors.email}</p>
                ) : null}
              </label>
              <label className="space-y-3">
                <p className="text-xs">{t("Phone")}</p>
                <input
                  type="text"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("Phone1")}
                  style={{
                    background: "rgba(235, 235, 235, 1)",
                  }}
                  className="px-10 rounded-lg border border-[#EBEBEB] py-1  "
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <p className=" text-xs  text-rose-200 ">
                    *{errors.phoneNumber}
                  </p>
                ) : null}
              </label>
            </div>
          </div>
          <div>
            <h1 className="text-1xl font-semibold mt-4 mb-3">{t("Company")}</h1>
            <div className=" flex flex-col space-y-3 md:items-center md:flex-row  md:space-x-10">
              <label className="space-y-3">
                <p className="text-xs">{t("CompanyName")}</p>
                <input
                  type="text"
                  name="companyName"
                  value={values.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("Company1")}
                  style={{
                    background: "rgba(235, 235, 235, 1)",
                  }}
                  className="px-10 rounded-lg border border-[#EBEBEB] py-1  "
                />
                {errors.companyName && touched.companyName ? (
                  <p className=" text-xs  text-rose-200 ">
                    *{errors.companyName}
                  </p>
                ) : null}
              </label>
              <label className="space-y-3">
                <p className="text-xs">{t("Job")}</p>
                <input
                  type="text"
                  name="jobTitle"
                  value={values.jobTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("Job1")}
                  style={{
                    background: "rgba(235, 235, 235, 1)",
                  }}
                  className="px-10 rounded-lg border border-[#EBEBEB] py-1  "
                />
                {errors.jobTitle && touched.jobTitle ? (
                  <p className=" text-xs  text-rose-200 ">*{errors.jobTitle}</p>
                ) : null}
              </label>
            </div>
            <h1 className="text-1xl font-semibold mt-4 mb-3 ">Security</h1>
            <div className=" flex flex-col space-y-3 md:items-center  md:flex-row md:space-x-10">
              <label className=" relative  items-center space-y-3">
                <p className="text-xs">{t("Password")}</p>
                <input
                  value={values.password}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t("Password1")}
                  style={{
                    background: "rgba(235, 235, 235, 1)",
                  }}
                  className="px-10 rounded-lg border border-[#EBEBEB] py-1  "
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className=" absolute right-3    top-6  md:right-3 md:top-[22px] md:z-[10]
                       cursor-pointer"
                >
                  {showPassword ? (
                    <AiOutlineEye fontSize={18} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={18} fill="#AFB2BF" />
                  )}
                </span>

                {errors.password && touched.password ? (
                  <p className=" text-xs  text-rose-200 ">*{errors.password}</p>
                ) : null}
              </label>
              <label className=" relative   space-y-3">
                <p className="text-xs">{t("Confrim")}</p>
                <input
                  value={values.confrimPassword}
                  name="confrimPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t("Confirm1")}
                  style={{
                    background: "rgba(235, 235, 235, 1)",
                  }}
                  className="px-10 rounded-lg border border-[#EBEBEB] py-1  "
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className=" absolute right-3 top-6  md:right-3 md:top-[22px] md:z-[10] cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEye fontSize={18} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={18} fill="#AFB2BF" />
                  )}
                </span>
                {errors.confrimPassword && touched.confrimPassword ? (
                  <p className=" text-xs  text-rose-200 ">
                    *{errors.confrimPassword}
                  </p>
                ) : null}
              </label>
            </div>
            <div className="flex flex-row space-x-4 space-y-5 items-center  relative ">
              <input
                type="checkbox"
                name="checkbox"
                checked={values.checkbox}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" text-black mt-5 absolute space-x-3"
              />
              <p className=" text-xs text-nowrap">{t("Accept")}</p>
            </div>
            {errors.checkbox ? (
              <p className=" mt-1 text-xs  text-rose-200 ">
                *{errors.checkbox}
              </p>
            ) : null}
          </div>
          <div className=" flex flex-row space-y-3 items-center  mb-3 space-x-3   md:space-x-5 md:items-end md:-mx-36   md:justify-end   md:space-y-4">
            <p className=" px-7 py-3 font-semibold  bg-button-gray    md:px-12 md:py-4 md:font-bold  rounded-lg  cursor-pointer">
              {t("Cancel")}
            </p>
            <button
              type="submit"
              className=" px-7 py-3 font-semibold text-white bg-button-bg md:px-12 md:py-4 md:font-bold  rounded-lg "
            >
              {t("Register")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
