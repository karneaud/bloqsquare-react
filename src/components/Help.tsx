import React, { useState } from 'react'
import Logo from './Logo'

const Help = () => {
    const [helpMenuOpen, setHelpMenu] = useState(false)
  return (
    <div>
        <button className='help-button' onClick={() => setHelpMenu(!helpMenuOpen)}>?</button>
        {helpMenuOpen && 
        <div className="modal">

        <div className="help-content">
            <Logo width={250}/>
          <span className="close" onClick={() => setHelpMenu(!helpMenuOpen)}>&times;</span>
          <h2>How to Play</h2>
          <p>To play the game is simple! Try to bloq out as many of the squares as you can more than your opponent before the time runs out!
            <br /> <br/>
You can also unbloq your opponents squares by clicking/ double clicking on them! Beware! Your opponent can do the same! Happy playing!</p>
        </div>
      
      </div>
        }
    </div>
  )
}

export default Help