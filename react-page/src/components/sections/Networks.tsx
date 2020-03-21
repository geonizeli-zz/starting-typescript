import React from 'react'
import styled from 'styled-components'

import Button from '../ui/Button';

export const Networks = () => {

  return (
    <Nav>
      <Button url='https://github.com/geonizeli'
              title='GitHub'></Button>

      <Button url='https://www.linkedin.com/in/geonizeli/'
              title='Linkedin'></Button>

      <Button url='https://t.me/geonizeli'
              title='Telegram'></Button>
    </Nav>
  )
}

export default Networks

const Nav = styled.nav`
  margin-top: 15px;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`