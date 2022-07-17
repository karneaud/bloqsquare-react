import React, { FC } from 'react'
import Player from '../../helpers/Player'
import Button from '../Button'
import Heading from '../Heading'
import Logo from '../Logo'
import Versus from '../Versus'
import "../../GameOverScreenStyles.css"

interface gameOverProps{
    player:Player;
    machine:Player;
    restartGame:Function;
}

const GameOverScreen:FC<gameOverProps> = ({player, machine, restartGame}) => {
  return (
    <div className="game-over-container">
        <div className="game-over">
            <Logo width={350}/>
            <Heading text="Game Over" headingStyle='home-screen-text'/>
        </div>
    <div className="results-container">
    <Versus colorPicked={player.chosenColor} machineColor={machine.chosenColor} playerScore={player.totalPoints} machineScore={machine.totalPoints} />
   <span onClick={() => restartGame()}>
   <Button text='Play Again' />
   </span>
    
    </div>
        
    </div>
  )
}

export default GameOverScreen