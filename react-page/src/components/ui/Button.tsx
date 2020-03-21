import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  title: string,
  url: string
}

export const Button = ({ title, url }: ButtonProps) => {

  return (
    <A href={url} target='_blank'>
      {title}
    </A>
  )
}

export default Button

const A = styled.a`
  transition: all .5s ease;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 10px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    border: 1px solid #f71963;
  }
`