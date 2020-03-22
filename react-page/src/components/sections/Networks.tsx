import React from 'react'
import styled from 'styled-components'

import Button from '../ui/Button';

import { faGithub, faLinkedin, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

export const Networks = () => {

  return (
    <>
    <Nav>
      <Button url='https://github.com/geonizeli'
              title='GitHub'
              icon={faGithub} ></Button>

      <Button url='https://www.linkedin.com/in/geonizeli/'
              title='Linkedin'
              icon={faLinkedin}></Button>

      <Button url='https://t.me/geonizeli'
              title='Telegram'
              icon={faTelegramPlane}></Button>
    </Nav>
    </>
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