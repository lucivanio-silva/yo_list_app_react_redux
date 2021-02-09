import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
//import { Container } from 'react-bootstrap'
import Routes from '../routes/routes'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
      }
`

const Container = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0px;
      background: #F5F5F5;
`

const App = ()=>
    <Container >
        <GlobalStyle />
        <Routes />
    </ Container>
          

export default App;
