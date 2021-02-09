import React, { useState }from 'react'
import {Modal, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import * as taskActions from '../../redux/actions/task'
import * as taskListActions from '../../redux/actions/taskList'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';


export const DeleteTaskModal = (props)=> {
    const [show, setShow] = useState(false)
    const handleClose = ()=> setShow(false)
    const handleShow = ()=> setShow(true)
    const dispatch = useDispatch()

    function deleteTask () {
        dispatch(taskActions.deleteTask({_id: props.taskId}))
        dispatch(taskListActions.fetchTasks(props.listId))
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
                            onClick={deleteTask}
                        >
                            Exluir
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
