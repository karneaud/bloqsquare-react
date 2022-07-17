import React, { FC, useEffect, useState } from 'react'

interface timerProps{
    gameOver:Function
}

const Timer:FC<timerProps> = ({gameOver}) => {
    const [seconds, setSeconds] = useState(10);
    const [minutes, setMinutes] = useState(1);

    let timer:any;
    useEffect(() => {
      
        timer = setInterval(() => {
            setSeconds(seconds-1)

            if(seconds === 0){
                setMinutes(minutes-1)
                setSeconds(59)
            }

            if(minutes === 0 && seconds === 0){
                gameOver()
            }
        }, 300)
    
      return () => clearInterval(timer)
    })
    


  return (
    
            <div className="timer-container">
                <h1>00:{minutes < 10 ? "0"+minutes: minutes}:{seconds<10?"0"+seconds:seconds}</h1>
            </div>

      
  )
}

export default Timer