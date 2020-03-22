import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type CardProps = {
  title: string,
  text: string,
  image: IconProp
}

export const Card = ({ title, text, image }: CardProps) => {
  return (
    <A>
      <Body>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Body>
      <Img>
        <Icon icon={image} />
      </Img>
    </A>
  )
}

export default Card

const A = styled.a`
  padding: 20px;
  margin: 1rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid transparent;
  transition: all .5s ease;
  font-size: 18px;
  height: 230px;

  &:hover {
    transition: all .5s ease;
    border: 1px solid #f71963;
    box-shadow: 0 0 0 2px #f71963, 0 0 20px rgba(247,25,99,.25);
    border-radius: 5px;
    color: #f71963;
  }
`

const Body = styled.div`
  max-width: 400px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Title = styled.div`
  font-size: 20px
`

const Text = styled.div`

`

const Img = styled.div`
  font-size: 130px;
  width: 230px;
  margin: 50px;
`