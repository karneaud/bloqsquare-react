import React, { FC } from 'react'
import Logo from '../Logo'
import "../../HomeScreenStyles.css"
import Heading from '../Heading'
import ColorPicker from '../ColorPicker'
import Versus from '../Versus'

const HomeScreen:FC = () => {
  return (
    <div className='container'>
        <Logo marginTop={-5}/>
        <Heading text='Choose Your Color' headingStyle='home-screen-text' />
        <ColorPicker />
        <Versus />
    </div>
  )
}

export default HomeScreen