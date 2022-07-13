import React, { FC } from 'react'
import Grid from '../helpers/Grid'

// interface GameBoardProps{
//     grid:Grid
// }

const GameBoard:FC = () => {
    const grid = new Grid(8)
    const gameStyle = {gridTemplateColumns: `repeat(${grid.gridSize}, 1fr)`}

  return (
    <div className='game-board' style={gameStyle}>
        {grid.cells.map(cell => {
            return(
                <div key={cell.index} id={`${cell.index}`} className='game-square' style={{background: cell.backgroundColor}}></div>
            )
        })}
    </div>
  )
}

export default GameBoard