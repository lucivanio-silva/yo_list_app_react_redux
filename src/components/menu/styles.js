import styled from 'styled-components'


export const BodyBar = styled.div`
    order: 3;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 9vh;
    background: #04b4ae;
    font-size: 2rem;
`
export const MenuButton = styled.button`
    outline: 0;
    background: transparent;
    color: #353a40;
    &:active {
        color: #25c9fa;
    }
`

export const Menu = styled.ul`
    flex: 1;
    font-family: sans-serif;
    padding: 5%;
    list-style-type: none;
    
`
export const Item = styled.li`
    flex: 1;
    text-decoration: none;
`
export const Button = styled.button`
    font-family: sans-serif;
    font-size: 1em;
    text-align: left;
    display: block;
    padding: 16px 20px;
    background: #353a40;
    color: white;
    position: relative;
    width: 100%;
    border: 0px;
    border-bottom: .5px solid #fff;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 82vh;
    background: #353a40;
    padding: 0px;
    overflow: auto;  
`

//fazer o active do botão !!!!!