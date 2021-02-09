import React, {useState} from 'react'
//import {useSelector} from 'react-redux'
import { Form, Button, Collapse, InputGroup } from 'react-bootstrap'
//import { useDispatch} from 'react-redux'
//import * as actions from '../../redux/actions/task'
import { TextArea } from './styles'

import moment from 'moment'

const FormEditTask = (props)=>{
    //controla a exibição do input date
    const [open, setOpen] = useState(false);
    const [openRe, setOpenRe] = useState(false);
    const [date, setDate] = useState(`${props.task.data}T${props.task.horario}`/*moment().format('YYYY-MM-DD')*/)
    
    let data = moment(props.task.data, 'YYYY-MM-DD')
   // const dispatch = useDispatch()

    //está escutando o reducer info que guarda informação da lista que a tarefa pertence
    //let info = useSelector(state => state.taskReducers.info)

    function handleADD(event){
        event.preventDefault()
    }

    function handleChange(event) {
        setDate(event.target.value)
    }

    const style = {
        background: '#535960',
        border: '0',
        outline: '0px',
        fontSize: '1.1rem'
    }

    return (
        <Form onSubmit={e => handleADD(e)} className= 'mt-3'>
            <Button  style={style} className='mb-3' block
                onClick={() => {
                    setOpen(!open)
                    setOpenRe(false)
                }}
                aria-controls="date"
                aria-expanded={open}
            >
                {props.task.data != undefined ? 
                    `Para: ${data.format('DD/MM/YYYY')} às ${props.task.horario}` : `definir data`
                }
            </Button>

            <Collapse in={open} >
                <Form.Group id='date'>
                    <Form.Label className='text-white'>Alterar Data:</Form.Label>
                    <Form.Control type="datetime-local" value={date} onChange={handleChange}/> 
                </ Form.Group>
            </Collapse>

            <Button  
                style={style} className='mb-3' block
                onClick={() => {
                    setOpenRe(!openRe)
                    setOpen(false)
                }}
                aria-controls="Repeat"
                aria-expanded={openRe}
            >
                <i className="fas fa-retweet" /> 
                {props.task.repeticoes != undefined ? 
                    ` Repetir a cada : ${props.task.repeticoes} dias` : ` Repetir`
                }
            </Button>

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
            <TextArea rows="3" placeholder='anotações da tarefa'/>
        </ Form>
        
    )
}

export default FormEditTask