import React, { useState }from 'react'
import {Modal, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions/step'

export const DeleteStepModal = (props)=> {
    const [show, setShow] = useState(false)
    const handleClose = ()=> setShow(false)
    const handleShow = ()=> setShow(true)
    const dispatch = useDispatch()

    function deleteStep () {
        dispatch(actions.deleteStep({ _id: props.step._id }))

        dispatch(actions.fetchSteps(props.taskId))
        handleClose()
    }

    return (
        <>
            <div style={{fontSize: '1.2rem', color: '#FFF', cursor: 'pointer'}}>
                <i className="fas fa-trash-alt" onClick={handleShow}></i>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                centered
            >
                <Modal.Body>
                    <p style={{fontSize:'1.5rem'}}>Deseja realmente exluir esta etapa?</p>
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
                            onClick={deleteStep}
                        >
                            Exluir
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
