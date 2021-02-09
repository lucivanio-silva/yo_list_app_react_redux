import React, { useState }from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import * as taskActions from '../../redux/actions/task'
import * as taskListActions from '../../redux/actions/taskList'
import EditIcon from '@material-ui/icons/Edit';


export const EditTaskModal = (props)=> {
    const [show, setShow] = useState(false)
    const handleClose = ()=> setShow(false)
    const handleShow = ()=> setShow(true)
    const dispatch = useDispatch()

    function editTask () {
        if (document.getElementById('taskName').value != '') {
            dispatch(taskActions.editTask({
                _id: props.task._id,
                nome: document.getElementById('taskName').value,
            }))
        }
        //atualiza a exibição da tarefa caso o modal esteja no header menu da mesma
        if (props.isHeaderMenu === true) {
            dispatch(taskActions.fetchTask(props.task._id))
        }
        dispatch(taskListActions.fetchTasks(props.listId))

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
                            <Form.Control size='lg' type='text' id='taskName' placeholder={props.task.nome}/>
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
                            onClick={editTask}
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