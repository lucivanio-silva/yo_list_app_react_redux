import React, { useEffect, useState } from 'react'
//import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/task'
import * as activeActions from '../../redux/actions/active'
import './checkbox.css'
import FormEditTask from './FormEditTask'
import FormNewStep from './FormNewStep'
import Steps from './StepList'
import { motion } from "framer-motion"


export const Container = styled.div`
    order: 2;
    width: 100%;
    height: 82vh;
    background: #353a40;
    padding: 5%;
    overflow: auto;
`

const Check = styled.div`
    display:grid;
    grid-template-columns: 40px auto;
    align-items: center;
`


const TaskView = (props)=>{
    const [refresh, setRefresh] = useState(true)
    let task = useSelector (state => state.taskReducers.task)
    let loading = useSelector (state => state.taskReducers.loading)

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

        setRefresh(!refresh)
        
    }

    //renderiza novamente o elemnto ao alterar seu status

    //primeira renderização
    useEffect(()=>{
        dispatch(actions.fetchTask(props.match.params.id))
        //marca que o elemento ativo é uma tarefa
        dispatch(activeActions.setActive({
            listId: task.lista,
            taskId: task._id,
            type: 'task'
        }))

        
    }, [refresh])
    
    //a tarefa só é carregada quando a requisição termina de ser chamada
    return (
        <Container >
        {loading === false ? 
                < div key={task._id}>
                    <Check>
                        <div className="checkbox-4" >
                            <input type="checkbox" 
                                id={task._id} 
                                value={task._id} 
                                onChange={() => handleStatus(task._id, task.status)}
                                checked={task.status == 'pendente'? false :  true}
                            />
                                <label htmlFor={task._id}></label>
                        </div>
                        <div className='check-text' style={{fontSize: '2em'}}>
                            {task.status == 'pendente' ? <span>{task.nome}</span> : <del>{task.nome}</del>}
                        </div>
                    </Check>
                    <Steps task={task} />
                    <FormNewStep task={task._id}/>
                    <FormEditTask task={task}/>
                </ div>
        : <></>}
                
        </Container>
        
    )
}

export default TaskView