import React from 'react'
import Countdown from './Countdown'

interface TimerProps {
    minutes?: number;
    seconds?: number;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Timer: React.FC<TimerProps> = ({ minutes, seconds, setShow }: TimerProps) => {
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
                <input type='text' maxLength={1} className='text-center font-semibold text-lg w-1/12 border-b-2 border-gray-400 outline-none bg-transparent' />
                <input type='text' maxLength={1} className='text-center font-semibold text-lg w-1/12 border-b-2 border-gray-400 outline-none bg-transparent' />
                <input type='text' maxLength={1} className='text-center font-semibold text-lg w-1/12 border-b-2 border-gray-400 outline-none bg-transparent' />
                <input type='text' maxLength={1} className='text-center font-semibold text-lg w-1/12 border-b-2 border-gray-400 outline-none bg-transparent' />
            </div>
            <div className='flex lg:mt-10 justify-center gap-x-5'>
                <button className='bg-[#ECECEC] w-1/2 p-3 rounded-2xl text-black font-semibold'>Resend OTP</button>
                <button className='bg-buttonbg w-1/2 p-3 rounded-2xl text-black font-semibold' onClick={() => setShow(false)}>Verify OTP</button>
            </div>
        </div>
    )
}

export default Timer
