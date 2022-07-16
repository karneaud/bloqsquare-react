import React, { FC } from 'react'

interface versusProps{
  colorPicked:string;
  machineColor:string;
  playerScore?:number;
  machineScore?:number;
}

const Versus:FC<versusProps> = ({colorPicked, machineColor, playerScore, machineScore}) => {
  



  return (
    <div className='versus-container'>
        <div className="player-header">
            <h3>Player 1</h3>
            <h3>A.I.</h3>
        </div>
        <div className="vs-box">
            <div id="player-square" style={{backgroundColor: colorPicked}} className="square">{playerScore}</div>
            <span style={{color: machineColor}}>vs</span>
            <div id="machine-square" className="square" style={{backgroundColor: machineColor}}>{machineScore}</div>
        </div>
    </div>
  )
}

export default Versus