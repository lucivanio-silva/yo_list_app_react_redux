import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import * as actions from '../../redux/actions/lists'

const FormNewList = (props)=> {
    const dispatch = useDispatch()

    function handleADD(event){
        event.preventDefault()
        dispatch(actions.addList({
            nome: document.getElementById('name').value
        }))

        dispatch(actions.getData())
        props.handleClose()
    }

    return (
        <Form onSubmit={e => handleADD(e)}>
            <Form.Group controlId = 'formNameList'>
                <Form.Control size='lg' type='text' id='name' placeholder='Nome da Lista' />
            </Form.Group>
            <Container className='text-right'>
                <Button variant='info' type='button' className='mr-3'>
                    Cancelar
                </Button>
                <Button variant='info' type='submit'>
                    Criar
                </Button>
            </Container>
        </Form>
    )
}

export default FormNewList