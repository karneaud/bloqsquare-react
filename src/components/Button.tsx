import { FC } from 'react'

interface buttonProps {
  text: string,
  className: string
}

const Button: FC<buttonProps> = ({ text, className }) => {
  return (
    <button className={className}>{text}</button>
  )
}

export default Button