import React from "react";
import mailsvg from "../../assets/mail.svg";
import OtpSection from "./components/OtpSection";

const ForgetPassword: React.FC = () => {
    const [email, setEmail] = React.useState<string>('');
    const [showOtp, setShowOtp] = React.useState<boolean>(false);

    const handleClick = () => {
        if (email === '') {
            alert('Please enter email');
            return;
        }
        setShowOtp(true);
    };

    return (
        <div className="flex flex-col justify-center items-center h-[85vh]">
            <div className="bg-bggray rounded-xl flex flex-col gap-y-5 w-full lg:w-1/2 p-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex gap-y-3 flex-col items-center">
                        <h1 className="text-3xl lg:text-4xl font-bold">Forget Password</h1>
                        <p className="text-sm text-black w-2/3 text-center font-semibold">
                            Enter your email address and we'll send you a link to reset your
                            password.
                        </p>
                        <div>
                            <img src={mailsvg} alt="hello" />
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col gap-y-5 ${showOtp ? "lg:gap-y-5" : "lg:gap-y-12"}`}>
                    <div>
                        <label className="text-black" htmlFor="email" >Email</label>
                        <div className="my-2 w-full">
                            <input type="email" name="email"
                                className="w-full p-3 rounded-2xl text-black bg-[#EBEBEB] outline-none"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    {showOtp ? <OtpSection minutes={2} setShow={setShowOtp} /> :
                        <div className="flex justify-center">
                            <button onClick={handleClick} className="bg-button-bg w-2/3 p-3 rounded-2xl text-white font-semibold">Send Reset Link</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
