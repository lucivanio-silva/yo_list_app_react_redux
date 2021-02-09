import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import FormNewTask from './FormNewTask'
import styled from 'styled-components'
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const Add = styled.button`
    width: 4rem;
    height: 4rem;
    color: #FFF;
    background: #6c757d;
    position: absolute;
    bottom: 4.5rem;
    right: 5%;
    border-radius: 4rem;
    border: 2px solid #F5F5F5;
    transition:all 0.3s ease;
    outline: 0;
    &:active {
        background: #198dc4;
        transform: scale(1.2);
    }

    @media(min-height: 730px) {
        bottom: 5.5rem;
    }

    @media(min-height: 1000px) {
        bottom: 7.5rem;
    }
`    

const NewTaskModal = (props)=> {
    const [show, setShow] = useState(false)
    const handleClose = ()=> setShow(false)
    const handleShow = ()=> setShow(true)

    return (
        <>
            <Add onClick={handleShow} >
                <AddRoundedIcon style={{fontSize: '3.5rem'}}/>
            </ Add>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Body>
                    <FormNewTask handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewTaskModal