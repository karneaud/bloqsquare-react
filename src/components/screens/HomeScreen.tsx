import React, { FC, useState } from 'react'
import Logo from '../Logo'
import "../../HomeScreenStyles.css"
import Heading from '../Heading'
import ColorPicker from '../ColorPicker'
import Versus from '../Versus'
import Button from '../Button'
import Help from '../Help'

const HomeScreen:FC = () => {
  const [color, setColor] = useState("")

  const choseColor = (colorPicked:string) => {
    setColor(colorPicked)
  }

  function invertHex(hex:string) {
    hex = hex.substring(1);
    let newHex = (Number(`0x1${hex}`) ^ 0xffffff)
        .toString(16)
        .substr(1)
        .toUpperCase();
    return `#${newHex}`;
}

let machineColor = invertHex(color)

  return (
    <div className='container'>
        <Logo marginTop={-5}/>
        <Heading text='Choose Your Color' headingStyle='home-screen-text' />
        <ColorPicker choseColor={choseColor}/>
        <Versus colorPicked={color} machineColor={machineColor}/>
        <Button text="play" />
        <Help />
    </div>
  )
}

export default HomeScreen