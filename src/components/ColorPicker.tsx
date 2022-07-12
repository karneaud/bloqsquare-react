import React from 'react'

const ColorPicker = () => {
  return (
    <div className="color-container">
        <input type="color" name="chosenColor" value="#ff0000" />
        <label className="input-color" htmlFor="chosenColor">
	        <div><span>Select</span><span>Color</span></div>
	    </label>
    </div>
  )
}

export default ColorPicker