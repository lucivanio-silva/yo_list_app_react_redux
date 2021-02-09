import React, { useState }from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import * as listActions from '../../redux/actions/lists'
import EditIcon from '@material-ui/icons/Edit';


export const EditListModal = (props)=> {
    const [show, setShow] = useState(false)
    const handleClose = ()=> setShow(false)
    const handleShow = ()=> setShow(true)
    const dispatch = useDispatch()

    function editList () {
        if (document.getElementById('listName').value != '') {
            dispatch (listActions.editList(
                {
                    _id: props.list._id,
                    nome: document.getElementById('listName').value
                }
            ))
        }
        //atualiza as listas
        dispatch(listActions.getData())
        handleClose()
    }

    return (
        <>
            <EditIcon onClick={handleShow}/>
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                centered
            >
                <Modal.Body>
                    <p style={{fontSize:'1.5rem'}}>Defina o novo nome</p>
                        <Form.Group>
                            <Form.Control size='lg' type='text' id='listName' placeholder={props.list.nome}/>
                        </ Form.Group>
                    <div style={{textAlign: 'right'}}>
                        <Button 
                            variant="outline-secondary" 
                            className='mr-4'
                            onClick={handleClose}
                        >
                            Cancelar
                        </Button>
                        <Button 
                            onClick={editList}
                            variant="outline-danger"
                        >
                            Salvar
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}