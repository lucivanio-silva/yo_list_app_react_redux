import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import FormNewList from './FormNewList'

const NewListModal = ()=> {
    const [show, setShow] = useState(false)
    const handleClose = ()=> setShow(false)
    const handleShow = ()=> setShow(true)

    return (
        <>
            
            <span 
                style={{
                    width:'100%', 
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    color: '#04b4ae',
                }}
                onClick={()=> handleShow()}
            >
               NOVA LISTA
            </span>
        
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Nova Lista</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormNewList handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewListModal
   