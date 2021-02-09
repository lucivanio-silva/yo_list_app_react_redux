import React, { useEffect } from 'react'
import {Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/step'
import { Step, Input, BtnAdd } from './styles'
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';


export default function (props) {

    const dispatch = useDispatch()

    function handleADD (event) {
        event.preventDefault()
        dispatch(actions.addStep(
            {
                nome: document.getElementById('nome').value,
                tarefa: props.task
            }
        ))

        dispatch(actions.fetchSteps(props.task))
        document.getElementById('nome').value = ''
    }

    return (
        <Form style={{padding: '0px 0px 2em 0px'}} 
            onSubmit={e => handleADD(e)}
            autoComplete="off"
        >
            <Step >
                    <SubdirectoryArrowRightIcon fontSize='large' />
                    <Input type='text' id='nome' placeholder='Adicionar Etapa'/>
                    <BtnAdd type="submit" style={{background: 'transparent', border: '0', outline: '0'}}>
                        <i className="fas fa-check"></i>
                    </BtnAdd>
            </ Step>

        </Form>
    )
}
