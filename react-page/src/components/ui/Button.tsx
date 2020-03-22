import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';


type ButtonProps = {
  title: string,
  url: string,
  icon: IconProp
}

export const Button = ({ title, url, icon }: ButtonProps) => {

  return (
    <A href={url} target='_blank'>
      <Icon icon={icon}/> {title}
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
    box-shadow: 0 0 0 2px #f71963, 0 0 20px rgba(247,25,99,.25);
  }
`