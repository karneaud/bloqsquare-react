import React, { FC, useState, useEffect } from 'react'
import Grid from '../helpers/Grid'
import Player from '../helpers/Player'


interface GameBoardProps{
    player:Player
    machine:Player
   incrementPlayerScore:Function
   decrementPlayerScore:Function
   incrementMachineScore:Function
}

function generateRandomInteger(max: number): number {
  return Math.floor(Math.random() * max);
}

const GameBoard:FC<GameBoardProps> = ({player, machine, incrementPlayerScore, decrementPlayerScore, incrementMachineScore}) => {
 
  let gridSize = 8
  if(window.innerWidth < 500 ) gridSize = 6
 
  const [grid, setGrid] = useState(new Grid(gridSize))


  const handleSquareClicked = (index:number, player:Player, opponent:Player) => {
    setGrid(prevState => ({
      ...prevState,
      cells: prevState.cells.map( (cell) => {
        if(cell.index === index){
          if(cell.isClicked){
            if(cell.backgroundColor === opponent.chosenColor){
              return {...cell, backgroundColor: "transparent", isClicked: false}
            } else{
              if(!player.isComputer) decrementPlayerScore()
              return cell //here is where to put d code for if a player click his own square
            }
          } else{
            player.isComputer ? incrementMachineScore() : incrementPlayerScore()
            return {...cell, backgroundColor: player.chosenColor, isClicked: true}
          }
        } else {
          return cell
        }
       } )
    }))
  
  }

  useEffect(() => {
  
    const computerInterval = setInterval(() => {
      const randomIndex = generateRandomInteger(
        grid.gridSize * grid.gridSize
      )
      
      handleSquareClicked(randomIndex, machine, player)
      console.log(machine.totalPoints)
       }, 300)

       return () => clearInterval(computerInterval)

       

  }, [])
  
  
  
    const gameStyle = {gridTemplateColumns: `repeat(${grid.gridSize}, 1fr)`}

    const squareClicked = (e: React.MouseEvent<Element, MouseEvent>) => {
      let square = e.target as HTMLDivElement
      let cellIndex = parseInt(square.id)
      handleSquareClicked(cellIndex, player, machine)
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