import React, { useState }from 'react'
import {Modal, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions/lists'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';


export const DeleteListModal = (props)=> {
    const [show, setShow] = useState(false)
    const handleClose = ()=> setShow(false)
    const handleShow = ()=> setShow(true)
    const dispatch = useDispatch()

    function deleteList () {
        dispatch(actions.removeList({id: props.id}))
        dispatch(actions.getData())
        handleClose()
    }

    return (
        <>
            <DeleteRoundedIcon onClick={handleShow}/>
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                centered
            >
                <Modal.Body>
                    <p style={{fontSize:'1.5rem'}}>Deseja realmente exluir esta Tarefa?</p>
                    <div style={{textAlign: 'right'}}>
                        <Button 
                            variant="outline-secondary" 
                            className='mr-4'
                            onClick={handleClose}
                        >
                            Cancelar
                        </Button>
                        <Button 
                            variant="outline-danger"
                            onClick={deleteList}
                        >
                            Exluir
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}