import React, { FC, useEffect, useState } from 'react'

const Timer:FC = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    let timer:any;
    useEffect(() => {
      
        timer = setInterval(() => {
            setSeconds(seconds+1)

            if(seconds === 50){
                setMinutes(minutes+1)
                setSeconds(0)
            }
        }, 1000)
    
      return () => clearInterval(timer)
    })
    


  return (
    <div className="timer">
        <div className="container">
            <div className="timer-container">
                <h1>{minutes}: {seconds}</h1>
            </div>

        </div>
    </div>
  )
}

export default Timer