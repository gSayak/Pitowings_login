import React, { useEffect, useState } from 'react'

/**
 * Represents the OTP section component for user authentication.
 * @param minutes - The number of minutes for the countdown timer (optional).
 * @param seconds - The number of seconds for the countdown timer (optional).
 * @param setShow - Function to toggle the visibility of the OTP section.
 */

// Props interface for Countdown component
interface CountdownProps {
    minutes?: number; // Optional prop for minutes
    seconds?: number; // Optional prop for seconds
    setShow: React.Dispatch<React.SetStateAction<boolean>>; // Function to update state to show or hide component
}

const Countdown: React.FC<CountdownProps> = ({ minutes = 0, seconds = 0, setShow }: CountdownProps) => {
    const [min, setMinutes] = useState(minutes);
    const [sec, setSeconds] = useState(seconds);

    // The useEffect hook updates the timer every second. It decrements the seconds state variable each second.
    // When seconds reach 0, it checks if minutes are also 0. If so, it hides the component by updating the state setShow to false.
    // If minutes are greater than 0, it decrements minutes and sets seconds to 59.
    // The interval is cleared when the component unmounts or re-renders to prevent memory leaks.

    useEffect(() => {
        let timeInterval = setInterval(() => {
            if (sec > 0) {
                setSeconds(sec - 1);
            }
            if (sec === 0) {
                if (min === 0) {
                    setShow(false);
                    clearInterval(timeInterval)
                } else {
                    setMinutes(min - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(timeInterval);
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
