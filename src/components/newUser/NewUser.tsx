import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from "react-hot-toast"
const NewUser = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        jobTitle: "",
        password: "",
        confrimPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { firstName,
        lastName,
        email,
        phoneNumber,
        companyName,
        jobTitle,
        password,
        confrimPassword } = formData
    //handle input fields, when some value changes
    const handleOnChange = (e: { target: { name: any; value: any } }) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    // Handle form Submissions
    const handleOnSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (password !== confrimPassword) {
            toast.error("Passwords Do Not Match")
            return
        }
        console.log("printing new User data->", formData)
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            companyName: "",
            jobTitle: "",
            password: "",
            confrimPassword: ""

        })
    }
    return (
        <div>
            <div className=' w-max mx-auto '>

                <form onSubmit={handleOnSubmit}
                    className='mt-3 md:w-9/12  md:mx-auto md:items-center md:-mx-40 md:justify-center  md:mt-3'>
                    <div className=' w-full space-y-4'>
                        <h1 className='text-black  text-3xl font-bold'>New User</h1>
                        <p className='text-1xl font-semibold'>Personal Details</p>
                        <div className=' w-full flex flex-col md:flex-row  md:space-x-10 md:items-center '>
                            <label className=' space-y-3'>
                                <p className=" text-xs">First Name</p>
                                <input
                                    required
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleOnChange}
                                    placeholder='Enter your firstname'
                                    style={{
                                        background: "rgba(235, 235, 235, 1)"

                                    }}
                                    className='px-10 rounded-lg border border-inputborder py-1  '
                                />
                            </label>
                            <label className='space-y-3'>
                                <p
                                    className='text-xs'
                                >Last Name</p>
                                <input
                                    required
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleOnChange}
                                    placeholder='Enter your lastname'
                                    style={{
                                        background: "rgba(235, 235, 235, 1)"

                                    }}
                                    className='px-10 rounded-lg border border-inputborder py-1  '
                                />
                            </label>
                        </div>
                        <div className=' flex flex-col space-y-3 md:items-center md:flex-row md:space-x-10'>
                            <label className='space-y-3'  >
                                <p
                                    className='text-xs'
                                >Email</p>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder='Enter your email'
                                    style={{
                                        background: "rgba(235, 235, 235, 1)"

                                    }}
                                    className='px-10 rounded-lg border border-inputborder py-1  '
                                />


                            </label>
                            <label className='space-y-3'  >
                                <p
                                    className='text-xs'
                                >Phone Number</p>
                                <input
                                    required
                                    type="text"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={handleOnChange}
                                    placeholder='Enter your phone Number'
                                    style={{
                                        background: "rgba(235, 235, 235, 1)"

                                    }}
                                    className='px-10 rounded-lg border border-inputborder py-1  '
                                />

                            </label>
                        </div>
                    </div>
                    <div >
                        <h1 className='text-1xl font-semibold mt-4 mb-3'>Company Details</h1>
                        <div className=' flex flex-col space-y-3 md:items-center md:flex-row  md:space-x-10'>
                            <label className='space-y-3'>
                                <p
                                    className='text-xs'
                                >Company Name</p>
                                <input
                                    required
                                    type="text"
                                    name="companyName"
                                    value={companyName}
                                    onChange={handleOnChange}
                                    placeholder='Enter your Company Name'
                                    style={{
                                        background: "rgba(235, 235, 235, 1)"

                                    }}
                                    className='px-10 rounded-lg border border-inputborder py-1  '
                                />
                            </label>
                            <label className='space-y-3'>
                                <p
                                    className='text-xs'
                                >Job Title</p>
                                <input
                                    required
                                    type="text"
                                    name="jobTitle"
                                    value={jobTitle}
                                    onChange={handleOnChange}
                                    placeholder='Enter your job title'
                                    style={{
                                        background: "rgba(235, 235, 235, 1)"

                                    }}
                                    className='px-10 rounded-lg border border-inputborder py-1  '
                                />
                            </label>
                        </div>
                        <h1 className='text-1xl font-semibold mt-4 mb-3 '>Security</h1>
                        <div className=' flex flex-col space-y-3 md:items-center  md:flex-row md:space-x-10'>


                            <label className=' relative  items-center space-y-3'>
                                <p
                                    className='text-xs'
                                >Password</p>
                                <input
                                    required
                                    value={password}
                                    name='password'
                                    type={showPassword ? "text" : "password"}
                                    onChange={handleOnChange}
                                    placeholder='Enter your password'
                                    style={{
                                        background: "rgba(235, 235, 235, 1)"

                                    }}
                                    className='px-10 rounded-lg border border-inputborder py-1  '
                                />
                                <span onClick={() => setShowPassword((prev) => !prev)}
                                    className=' absolute right-3    top-6  md:right-3 md:top-[22px] md:z-[10]
                       cursor-pointer'
                                >
                                    {
                                        showPassword ? (
                                            <AiOutlineEye fontSize={18} fill="#AFB2BF" />
                                        ) : (
                                            <AiOutlineEyeInvisible fontSize={18} fill="#AFB2BF" />
                                        )
                                    }

                                </span>
                            </label>
                            <label className=' relative   space-y-3'>
                                <p
                                    className='text-xs'>Confirm Password</p>
                                <input
                                    required
                                    value={confrimPassword}
                                    name='confrimPassword'
                                    onChange={handleOnChange}
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder='Enter your confirm Password'
                                    style={{
                                        background: "rgba(235, 235, 235, 1)"

                                    }}
                                    className='px-10 rounded-lg border border-inputborder py-1  '
                                />
                                <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    className=' absolute right-3 top-6  md:right-3 md:top-[22px] md:z-[10] cursor-pointer'
                                >
                                    {
                                        showConfirmPassword ? (
                                            <AiOutlineEye fontSize={18} fill="#AFB2BF" />
                                        ) : (
                                            <AiOutlineEyeInvisible fontSize={18} fill="#AFB2BF" />
                                        )
                                    }

                                </span>
                            </label>
                        </div>
                        <div className='flex flex-row space-x-4 space-y-5 items-center  relative '>

                            <input
                                required
                                type="checkbox"
                                className=' text-black mt-5 absolute space-x-3' />
                            <p className=' text-xs text-nowrap'>Accept the terms and conditions of service</p>

                        </div>
                    </div>
                    <div className=' flex flex-row space-y-3 items-center  mb-3 space-x-3   md:space-x-5 md:items-end md:-mx-36   md:justify-end   md:space-y-4'>
                        <p
                            className=' px-7 py-3 font-semibold  bg-button-gray   md:px-12 md:py-4 md:font-bold  rounded-lg  cursor-pointer'
                        >
                            CANCEL
                        </p>
                        <button
                            type="submit"
                            className=' px-7 py-3 font-semibold text-white md:px-12 md:py-4 md:font-bold rounded-lg bg-button-bg'
                        >
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewUser