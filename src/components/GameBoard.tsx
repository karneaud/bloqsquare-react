import React, { FC, useState, useEffect } from 'react'
import Grid from '../helpers/Grid'
import Player from '../helpers/Player'

interface GameBoardProps{
    player:Player
    machine:Player
}

function generateRandomInteger(max: number): number {
  return Math.floor(Math.random() * max);
}

const GameBoard:FC<GameBoardProps> = ({player, machine}) => {
  const [value, setValue] = useState(0)
 
  const [grid, setGrid] = useState(new Grid(8))

  useEffect(() => {
  
    const computerInterval = setInterval(() => {
      const randomIndex = generateRandomInteger(
        grid.gridSize * grid.gridSize
      )
      // console.log(randomIndex)
      // const randomCell = grid.cells[randomIndex]
      setGrid(prevState => ({
        ...prevState,
        cells: prevState.cells.map(
          cell => cell.index === randomIndex ? {...cell, backgroundColor: machine.chosenColor, isClicked: true} : cell
        )
      }))
       }, 1000)

    
  }, [])
  
  
  
    const gameStyle = {gridTemplateColumns: `repeat(${grid.gridSize}, 1fr)`}

    const squareClicked = (e: React.MouseEvent<Element, MouseEvent>) => {
      let square = e.target as HTMLDivElement
      let cellIndex = parseInt(square.id)
      setGrid(prevState => ({
        ...prevState,
        cells: prevState.cells.map(
          cell => cell.index === cellIndex ? {...cell, backgroundColor: player.chosenColor, isClicked: true} : cell
        )
      }))
      //the above code grabs the id of the clicked element and 
      //uses that to change the bg color of the cell in the cells
      //list in the grid, then react rerenders
    }

  return (
    <div className='game-board' style={gameStyle}>
        {grid.cells.map(cell => {
            return(
                <div 
                key={cell.index} 
                id={`${cell.index}`} 
                className={cell.isClicked ? 'game-square clicked': "game-square" }
                style={{backgroundColor: cell.backgroundColor}}
                onClick={(e) => squareClicked(e)}
                > </div>
            )
        })}
    </div>
  )
}

export default GameBoard