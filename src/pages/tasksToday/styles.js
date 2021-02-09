import styled from 'styled-components'

export const Body = styled.div`
    order: 2;
    width: 100%;
    height: 82vh;
    padding-bottom: 10rem;
    overflow: auto;
    @media(min-width: 750px) {
        width: 45rem;
        margin-left: auto;
        margin-right: auto;
    }
`

export const TaskUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

export const Task = styled.li`
    background: #6c757d;
    border-radius: 10px;
    margin: 10px;
    overflow: hidden;
    padding: 10px 20px;
    display:grid;
    grid-template-columns: 40px auto 15px;
    align-items: center;
`