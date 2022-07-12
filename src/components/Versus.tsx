import React from 'react'

const Versus = () => {
  return (
    <div className='versus-container'>
        <div className="player-header">
            <h3>player 1</h3>
            <h3>A.I.</h3>
        </div>
        <div className="vs-box">
            <div id="player-square" className="square"></div>
            <span>vs</span>
            <div id="machine-square" className="square"></div>
        </div>
    </div>
  )
}

export default Versus