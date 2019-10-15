import React from 'react'
import ComponentNameListView from '../Components/ComponentNameListView'
import styled, { css } from 'styled-components'

const Title = styled.h1`
  text-align: center;
  color: grey;
`

const MainContainer = () => {
  return (
    <>
      <Title>PMBD Data View</Title>
      <ComponentNameListView />
    </>
  )
}

export default MainContainer
