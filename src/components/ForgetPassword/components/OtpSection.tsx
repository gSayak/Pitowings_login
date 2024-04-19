import React from 'react'
import Countdown from './Countdown'

interface OtpSectionProps {
    minutes?: number;
    seconds?: number;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const OtpSection: React.FC<OtpSectionProps> = ({ minutes, seconds, setShow }: OtpSectionProps) => {
    const [otp, setOtp] = React.useState(['', '', '', '']);

    const handleAlphabetChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.value !== '' && !/^[0-9]$/.test(e.target.value)) {
            alert('Please enter a valid number')
            e.target.value = ''
        }
        else {
            setOtp([...otp.map((value, i) => i === index ? e.target.value : value)])
        }
    }

    const OtpField = [...Array(4)];

    const handleVerifyOTP = () => {
        if (otp.join('') === '1234') {
            alert('OTP Verified')
            setShow(false);
        }
        else {
            alert('OTP is incorrect or OTP Not Entered')
        }
    }

    return (
        <div>
            <div className='flex flex-col items-center'>
                <p className='text-black'>We have sent you One Time Password to your email</p>
                <div className='flex flex-col gap-y-5'>
                    <p className='text-center font-semibold text-black'>Please Enter OTP</p>
                    {/* Timer */}
                    <div className='flex justify-center'>
                        <Countdown minutes={minutes} seconds={seconds} setShow={setShow} />
                    </div>
                </div>
            </div>
            {/* Write OTP  */}
            <div className='mt-5 flex gap-x-8 justify-center'>
                {
                    OtpField.map((_, index) => (
                        <input key={index} type='text' onChange={e => handleAlphabetChange(e, index)} maxLength={1} className='text-center font-semibold text-lg w-1/12 border-b-2 border-gray-400 outline-none bg-transparent' />
                    ))
                }
            </div>
            <div className='flex mt-5 lg:mt-10 justify-center gap-x-5'>
                <button className='bg-[#ECECEC] w-1/2 p-3 rounded-2xl text-black font-semibold'>Resend OTP</button>
                <button className='bg-buttonbg w-1/2 p-3 rounded-2xl text-black font-semibold' onClick={handleVerifyOTP}>Verify OTP</button>
            </div>
        </div>
    )
}

export default OtpSection
