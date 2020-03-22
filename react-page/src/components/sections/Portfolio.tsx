import React from 'react'
import styled from 'styled-components'

import Card from '../ui/Card'

import { faDatabase, faWifi } from '@fortawesome/free-solid-svg-icons';

export const Portfolio = () => {
  return (
    <>
    <Title>Portfolio</Title>
    <Card title='Question Database'
          text='Bank of questions for internal use in educational
          institution (administration and professor) with reports and filters.'
          image={faDatabase} />

    <Card title='IoT Endpoint'
          text='Relay and RGB control using MQTT, ESP32, Node-Red and IBM Watson.'
          image={faWifi} />
    </>
  )
}

export default Portfolio

const Title = styled.div`
  font-size: 2.8rem;
  line-height: 42px;
  font-weight: bold;
  border-bottom: 2px solid #142032;
`