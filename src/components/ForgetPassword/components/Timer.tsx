import React from 'react'
import Countdown from './Countdown'

const Timer: React.FC = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <p className='text-black'>We have sent you One Time Password to your email</p>
                <div>
                    <p className='font-semibold text-black'>Please Enter OTP</p>
                    {/* Timer */}
                    <div>
                        <Countdown minutes={2} />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            {/* Write OTP  */}
            <div>

            </div>
            <div className='flex justify-center gap-x-5'>
                <button className='bg-[#ECECEC] w-1/2 p-3 rounded-2xl text-black font-semibold'>Resend OTP</button>
                <button className='bg-buttonbg w-1/2 p-3 rounded-2xl text-black font-semibold'>Verify OTP</button>
            </div>
        </div>
    )
}

export default Timer
