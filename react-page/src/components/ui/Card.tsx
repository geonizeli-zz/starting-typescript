import React from 'react'
import styled from 'styled-components'

type CardProps = {
  title: string,
  text: string,
  src: string
}

export const Card = ({ title, text, src }: CardProps) => {
  return (
    <A>
      <Body>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Body>

      <Img src={src} />
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
  border: 1px solid transparent;
  transition: all .5s ease;
  font-size: 18px;
  color: #ffffff;
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

const Img = styled.img`
  width: 230px;
  border-radius: 50%;
`