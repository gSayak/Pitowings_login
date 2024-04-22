import React from 'react';
import Countdown from './Countdown'; // Importing the Countdown component

/**
 * Represents the OTP section component for user authentication.
 * @param minutes - The number of minutes for the countdown timer (optional).
 * @param seconds - The number of seconds for the countdown timer (optional).
 * @param setShow - Function to toggle the visibility of the OTP section.
 */

interface otpSectionProps {
    minutes?: number;
    seconds?: number;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const OtpSection: React.FC<otpSectionProps> = ({ minutes, seconds, setShow }: otpSectionProps) => {
    const [otp, setOtp] = React.useState(['', '', '', '']);

    /**
     * Handles the change event for OTP input fields.
     * Validates input and updates the OTP state accordingly.
     * @param e - The change event.
     * @param index - The index of the OTP input field.
     */
    const handleAlphabetChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.value !== '' && !/^[0-9]$/.test(e.target.value)) {
            alert('Please enter a valid number');
            e.target.value = '';
        } else {
            setOtp([...otp.map((value, i) => i === index ? e.target.value : value)]);
        }
    };

    // Array to render OTP input fields
    const otpField = [...Array(4)];

    /**
     * Handles the verification of the entered OTP.
     * Displays an alert message based on the verification result.
     */
    const handleVerifyOTP = () => {
        if (otp.join('') === '1234') {
            alert('OTP Verified');
            setShow(false);
        } else {
            alert('OTP is incorrect or OTP Not Entered');
        }
    };

    return (
        <div>
            <div className='flex flex-col items-center'>
                <p className='text-black'>We have sent you One Time Password to your email</p>
                <div className='flex flex-col gap-y-5'>
                    <p className='text-center font-semibold text-black'>Please Enter OTP</p>
                    {/* Render Countdown component for displaying timer */}
                    <div className='flex justify-center'>
                        <Countdown minutes={minutes} seconds={seconds} setShow={setShow} />
                    </div>
                </div>
            </div>

            {/* Render OTP input fields */}
            <div className='mt-5 flex gap-x-8 justify-center'>
                {
                    otpField.map((_, index) => (
                        <input key={index} type='text' onChange={e => handleAlphabetChange(e, index)} maxLength={1} className='text-center font-semibold text-lg w-1/12 border-b-2 border-gray-400 outline-none bg-transparent' />
                    ))
                }
            </div>
            <div className='flex mt-5 lg:mt-10 justify-center gap-x-5'>
                <button className='bg-button-gray w-1/2 p-3 rounded-2xl text-black font-semibold'>Resend OTP</button>
                {/* Button to verify OTP */}
                <button className='bg-button-bg w-1/2 p-3 rounded-2xl text-white font-semibold' onClick={handleVerifyOTP}>Verify OTP</button>
            </div>
        </div>
    );
};

export default OtpSection; // Export OtpSection component
