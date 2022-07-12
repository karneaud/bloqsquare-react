import React, { FC } from 'react'

interface buttonProps{
    text:string
}

const Button:FC<buttonProps> = ({text}) => {
  return (
    <button className="play-button">{text}</button>
  )
}

export default Button