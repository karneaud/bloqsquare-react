import React, { FC } from 'react'

interface textDisplay{
    headingStyle?:string;
    text: string;
}

const Heading:FC<textDisplay> = ({text, headingStyle}) => {
  return (
    <h2 className={headingStyle} >{text}</h2>
  )
}


export default Heading