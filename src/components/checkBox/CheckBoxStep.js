import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/step'
import { DeleteStepModal } from '../modals/DeleteStepModal'
import './checkbox.css'


const Check = styled.div`
    display:grid;
    grid-template-columns: 40px auto 40px;
    align-items: center;
    padding-left: 1.5em;
`

export const CheckBoxStep = (props) => {

    const dispatch = useDispatch()

    function handleStatus(id, sta, taskId) {
        const checkbox = document.getElementById(id)
        if(sta == 'pendente'){
            dispatch(actions.editStep ({
                _id: id,
                status: 'finalizada'
            }))
            checkbox.setAttribute('checked', false)
        }else {
            dispatch(actions.editStep ({
                _id: id,
                status: 'pendente'
            }))
            checkbox.setAttribute('checked', true)   
        }

        dispatch(actions.fetchSteps(taskId))
        
    }
    
    return (
        <Check>
            <div className="checkbox-4" >
                <input type="checkbox" 
                    id={props.data._id} 
                    value={props.data._id} 
                    onChange={() => handleStatus(props.data._id, props.data.status, props.data.tarefa)}
                    checked={props.data.status == 'pendente'? false :  true}
                />
                <label className='small' htmlFor={props.data._id}></label>
            </div>
            <div className='check-text' style={{fontSize: '1.5em'}}>
                {props.data.status == 'pendente' ? <span>{props.data.nome}</span> : <del>{props.data.nome}</del>}
            </div>
            <div>
                <DeleteStepModal step={props.data} taskId={props.data.tarefa}/>
            </div>
        </Check>
    )
}
