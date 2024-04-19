import React, { useEffect, useState } from 'react'

interface CountdownProps {
    minutes?: number;
    seconds?: number;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Countdown: React.FC<CountdownProps> = ({ minutes = 0, seconds = 0, setShow }: CountdownProps) => {
    const [min, setMinutes] = useState(minutes);
    const [sec, setSeconds] = useState(seconds);

    useEffect(() => {
        let TimeInterval = setInterval(() => {
            if (sec > 0) {
                setSeconds(sec - 1);
            }
            if (sec === 0) {
                if (min === 0) {
                    setShow(false);
                    clearInterval(TimeInterval)
                } else {
                    setMinutes(min - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(TimeInterval);
        };
    });

    return (
        <div>
            <div className='flex gap-x-2 justify-center my-2'>
                <div className='text-black font-semibold text-2xl'>
                    {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
                </div>
            </div>
        </div>
    )
}

export default Countdown
