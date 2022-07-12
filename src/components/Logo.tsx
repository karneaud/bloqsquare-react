import React, { FC } from 'react'
interface size {
  width?:number,
  marginTop?: number
}

const Logo:FC<size> = ({width, marginTop}) => {
  const imageStyle = {width, marginTop}
  return (
    <img style={imageStyle} className='' src="./logo.png" alt="bloqsquare logo" />
  )
}

Logo.defaultProps = {
  width:550
}

export default Logo