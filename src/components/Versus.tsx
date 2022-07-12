import React, { FC } from 'react'

interface versusProps{
  colorPicked:string;
  machineColor:string;
}

const Versus:FC<versusProps> = ({colorPicked, machineColor}) => {
  



  return (
    <div className='versus-container'>
        <div className="player-header">
            <h3>Player 1</h3>
            <h3>A.I.</h3>
        </div>
        <div className="vs-box">
            <div id="player-square" style={{backgroundColor: colorPicked}} className="square"></div>
            <span style={{color: machineColor}}>vs</span>
            <div id="machine-square" className="square" style={{backgroundColor: machineColor}}></div>
        </div>
    </div>
  )
}

export default Versus