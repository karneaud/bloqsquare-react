import React, { FC } from 'react'
import "../../GameScreenStyles.css"
import Grid from '../../helpers/Grid'
import Player from '../../helpers/Player'
import GameBoard from '../GameBoard'
import GameInfo from '../GameInfo'

interface gameScreenProps {
  player:Player
}

const GameScreen:FC<gameScreenProps> = ({player}) => {
   
  return (
    <div className='game-container'>
       <GameInfo />
       <GameBoard player={player}/>
    </div>
  )
}

export default GameScreen