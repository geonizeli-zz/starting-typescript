import React from 'react';
import styled from 'styled-components';
import Networks from './components/sections/Networks';

function App() {
  return (
    <Container>
      <Networks />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  text-aling: center;
`