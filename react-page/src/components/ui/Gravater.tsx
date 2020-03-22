import React from 'react'
import styled from 'styled-components'
import { Md5 } from "md5-typescript";

console.log(Md5.init('test'));

type GravatarProps = {
  email: string
}

export const Gravatar = ({ email }: GravatarProps) => {
  const user = 'https://www.gravatar.com/avatar/' + Md5.init(email) + '?s=400'
  return (
    <Img src={user}/>
  )
}

export default Gravatar

const Img = styled.img`
  border: solid 1px #000000;
  border-radius: 50%;
  transition: all .5s ease;
  width: 28rem;

  &:hover {
    transition: all .5s ease;
    border: solid 1px #f71963;
    box-shadow: 0 0 0 1px #f71963, 0 0 20px rgba(247,25,99,.25);
  }
`