import styled from 'styled-components'

const TaskUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

const Task = styled.li`
    background: #6c757d;
    border-radius: 10px;
    margin: 10px;
    overflow: hidden;
    padding: 10px 20px;
    display:grid;
    grid-template-columns: 40px auto 15px;
    align-items: center 
`

const NewTask = styled.button`
    font-family: sans-serif;
    background-color: #333;
    text-align: center;
    color: #fff;
    padding: 16px 0px;
    margin: 1em;
    border: 0px;
    cursor: pointer;
    overflow: hidden;
    flex: 1;
`

const Body = styled.div`
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

export {TaskUl, Task, NewTask, Body}