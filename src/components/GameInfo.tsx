import React, { FC } from 'react'
import Heading from './Heading'
import Logo from './Logo'
import Timer from './Timer';



interface gameInfoProps{
  score:string;
  headingStyle:string;
  gameOver:Function

}

const GameInfo:FC<gameInfoProps> = ({score, headingStyle, gameOver}) => {
  return (
    <div className='score'>
        <Logo width={300}/>
        <Timer gameOver={gameOver}/>
        <Heading text={score} headingStyle={headingStyle} />
    </div>
  )
}

export default GameInfo