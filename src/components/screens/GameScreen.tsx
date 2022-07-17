import React, { FC, useRef, useState } from 'react'
import Grid from '../../helpers/Grid'
import Player from '../../helpers/Player'
import GameBoard from '../GameBoard'
import GameInfo from '../GameInfo'


interface gameScreenProps {
  player: Player
  machine: Player
  endGame: Function
}

const GameScreen: FC<gameScreenProps> = ({ player, machine, endGame }) => {
  const [playerScore, setPlayerScore] = useState(0)
  const machineScore = useRef(0)

  const gameOver = () => {
    endGame(playerScore, machineScore.current)
  }


  const incrementPlayerScore = () => setPlayerScore(playerScore + 1)
  const decrementPlayerScore = () => setPlayerScore(playerScore - 1)
  const incrementMachineScore = () => machineScore.current += 1

  return (
    <section className='game'>
      <GameInfo score={playerScore} gameOver={gameOver} />
      <GameBoard player={player} machine={machine} incrementPlayerScore={incrementPlayerScore} decrementPlayerScore={decrementPlayerScore} incrementMachineScore={incrementMachineScore} />
    </section>
  )
}

export default GameScreen