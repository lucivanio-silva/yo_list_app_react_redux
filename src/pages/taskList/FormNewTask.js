import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { Form, Button, Container, Collapse, InputGroup } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { useDispatch} from 'react-redux'
import * as taskActions from '../../redux/actions/task'
import * as taskListActions from '../../redux/actions/taskList'

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: '100%',
      padding: '10px 0 7px'
    },
}));

const FormNewTask = (props)=>{
    //controla a exibição do input date
    const [open, setOpen] = useState(false);
    const [openRe, setOpenRe] = useState(false);

    const dispatch = useDispatch()

    let list = useSelector (state => state.activeReducers.elementInfo)
    const classes = useStyles();

    function handleADD(event){
        event.preventDefault()
        dispatch(taskActions.addTask({
            nome: document.getElementById('name').value,
            data: document.getElementById('endDate').value,
            horario: document.getElementById('endTime').value,
            anotacao: '',//document.getElementById('describe').value,
            repeticoes: 10,
            lista: list.id
        }))
        dispatch(taskListActions.fetchTasks(list.id))
        props.handleClose()
    }

    return (
        <Form onSubmit={e => handleADD(e)}>
            <Form.Group>
                <Form.Control size='lg' type='text' id='name' placeholder='Nova Tarefa'/>
            </ Form.Group>

            <Button  variant="secondary" className='mb-3 mr-3'
                onClick={() => {
                    setOpen(!open)
                    setOpenRe(false)
                }}
                aria-controls="date"
                aria-expanded={open}
            >
                Definir Data
            </Button>

            <Button  variant="secondary" className='mb-3'
                onClick={() => {
                    setOpenRe(!openRe)
                    setOpen(false)
                }}
                aria-controls="Repeat"
                aria-expanded={openRe}
            >
                <i className="fas fa-retweet" /> Repetir
            </Button>
            
            <Collapse in={open}>
                <Form.Group id='date'>
                    <TextField
                        id="endDate"
                        label="Data de Conclusão"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="endTime"
                        label="Horário"
                        type="time"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                </ Form.Group>
            </Collapse>

            <Collapse in={openRe}>
                <Form.Group id='repeat'>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text >A cada</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type='number' id='num' className='mr-3' />
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>dias</option>
                            <option>semanas</option>
                            <option>meses</option>
                            <option>Anos</option>
                        </Form.Control>
                    </InputGroup>
                </ Form.Group>
            </Collapse>

            {/*
            <Form.Group>
                <Form.Control id='describe' as='textarea' rows='4' placeholder='Descrição da tarefa' />
            </Form.Group>
            */}

            <Container className='text-right'>
                <Button type='button' variant="outline-danger" className='mr-3' onClick={()=> props.handleClose()}>Cancelar</Button>
                <Button type='submit'>Salvar</Button>
            </Container>
        </ Form>
        
    )
}

export default FormNewTask