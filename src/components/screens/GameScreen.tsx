import React, { FC, useState} from 'react'
import "../../GameScreenStyles.css"
import Grid from '../../helpers/Grid'
import Player from '../../helpers/Player'
import GameBoard from '../GameBoard'
import GameInfo from '../GameInfo'

interface gameScreenProps {
  player:Player
  machine:Player
  endGame:Function
}

const GameScreen:FC<gameScreenProps> = ({player, machine, endGame}) => {
  const [playerScore, setPlayerScore] = useState(0)
  const [machineScore, setMachineScore] = useState(0)
  



 const incrementPlayerScore = () => setPlayerScore(prev => prev + 1)
 const decrementPlayerScore = () => setPlayerScore(prev => prev - 1)
 const incrementMachineScore = () => setMachineScore(prev => prev + 1)
   
  return (
    <div className='game-container'>
       <GameInfo score={`${playerScore}pts`} headingStyle="score-board"/>
       <GameBoard player={player} machine={machine} incrementPlayerScore={incrementPlayerScore} decrementPlayerScore={decrementPlayerScore} incrementMachineScore={incrementMachineScore}/>
    </div>
  )
}

export default GameScreen