import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'
import HeaderMenu from './HeaderMenu'
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';

const Container = styled.div`
    order: 1;
    width: 100%;
    height: 9vh;
    padding: 0px;
`

const Header = ()=>{
    //controla a visibilidade do toggle
    const [expanded, setExpanded] = useState(false)

    return (
        <Container id='teste'>
            <Navbar variant='dark' expand='md' expanded={expanded} style={{background: '#04b4ae', height: '100%'}}>
                <Navbar.Brand>
                    <AssignmentTurnedInRoundedIcon style={{marginRight:'0.5rem'}}/>
                    YO LIST
                </Navbar.Brand>
            </Navbar>
            <HeaderMenu />
        </Container> 
    )
}

export default Header