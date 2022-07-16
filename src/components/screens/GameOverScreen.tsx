import React, { FC } from 'react'
import Button from '../Button'
import Heading from '../Heading'
import Logo from '../Logo'
import Versus from '../Versus'

interface gameOverProps{
    colorPicked:string
    machineColor:string
}

const GameOverScreen:FC<gameOverProps> = ({colorPicked, machineColor}) => {
  return (
    <div className="game-over-container">
        <div className="game-over">
            <Logo width={350}/>
            <Heading text="Game Over" headingStyle='home-screen-text'/>
        </div>
    <div className="results-container">
    <Versus colorPicked={colorPicked} machineColor={machineColor} />
    <Button text='Play Again' />
    </div>
        
    </div>
  )
}

export default GameOverScreen