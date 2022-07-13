import React, { FC, useState } from 'react'
import Grid from '../helpers/Grid'
import Player from '../helpers/Player'

interface GameBoardProps{
    player:Player
}

const GameBoard:FC<GameBoardProps> = ({player}) => {
 
  const [grid, setGrid] = useState(new Grid(8))
  const [newPlayer, setNewPlayer] = useState(player)
    const gameStyle = {gridTemplateColumns: `repeat(${grid.gridSize}, 1fr)`}

    const squareClicked = (e: React.MouseEvent<Element, MouseEvent>) => {
      let square = e.target as HTMLDivElement
      let cellIndex = parseInt(square.id)
      setGrid(prevState => ({
        ...prevState,
        cells: prevState.cells.map(
          cell => cell.index === cellIndex ? {...cell, backgroundColor: newPlayer.chosenColor} : cell
        )
      }))
      //the above does not work
      //make grid state
      //modify the cell and re-render
    }

  return (
    <div className='game-board' style={gameStyle}>
        {grid.cells.map(cell => {
            return(
                <div 
                key={cell.index} 
                id={`${cell.index}`} 
                className='game-square' 
                style={{background: cell.backgroundColor}}
                onClick={(e) => squareClicked(e)}
                ></div>
            )
        })}
    </div>
  )
}

export default GameBoard