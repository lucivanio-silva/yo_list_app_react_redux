import React from 'react'
import styled from 'styled-components'

const CardBody = styled.div`
    width: 100%;
    border-radius: 10px;
    background: #79838c;
    padding: 1rem;
    @media(min-width: 750px) {
        width: 44rem;
        margin-left: auto;
        margin-right: auto;
    }
`

export const Card = (props) => 
    <CardBody>
        {props.children}
    </CardBody>