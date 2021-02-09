import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/task'
import './checkbox.css'


const Check = styled.div`
    display:grid;
    grid-template-columns: 40px auto;
    align-items: center;
`

export const CheckBox = (props) => {
    const [refresh, setRefresh] = useState(false)
    const dispatch = useDispatch()

    function handleStatus(id, sta) {
        const checkbox = document.getElementById(id)

        if(sta == 'pendente'){
            dispatch(actions.editTask ({
                _id: id,
                status: 'finalizada'
            }))
            checkbox.setAttribute('checked', false)
        }else {
            dispatch(actions.editTask ({
                _id: id,
                status: 'pendente'
            }))
            checkbox.setAttribute('checked', true)   
        }

        dispatch(actions.fetchTask(id))
    }
    
    return (
        <Check>
            <div className="checkbox-4" >
                <input type="checkbox" 
                    id={props.data._id} 
                    value={props.data._id} 
                    onChange={() => handleStatus(props.data._id, props.data.status)}
                    checked={props.data.status == 'pendente'? false :  true}
                />
                <label htmlFor={props.data._id}></label>
            </div>
            <div className='check-text' style={{fontSize: '2em'}}>
                {props.data.status == 'pendente' ? <span>{props.data.nome}</span> : <del>{props.data.nome}</del>}
            </div>
        </Check>
    )
}
