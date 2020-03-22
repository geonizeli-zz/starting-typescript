import React from 'react';
import styled from 'styled-components';

import Gravatar from '../ui/Gravater';

export const Apresentation = () => {
  return(
    <Div>
      <Gravatar email='jvsouzax@gmail.com'></Gravatar>
      <Name>João Victor Geonizeli</Name>
    </Div>
  )
}

export default Apresentation;

const Div = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`
const Name = styled.div`
  font-size: 4.7rem;
  color: #ffffff;
  text-align: center;
  margin: auto;
`