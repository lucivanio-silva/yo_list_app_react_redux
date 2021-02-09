import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {TaskUl, Task, Body} from './styles'
import '../../components/checkBox/checkbox.css'
import * as taskListActions from '../../redux/actions/taskList'
import * as actions from '../../redux/actions/task'
import * as menuActions from '../../redux/actions/menu'
import * as activeActions from '../../redux/actions/active'
import { useSelector, useDispatch } from 'react-redux'
import NewTaskModal from './NewTaskModal'
import styled from 'styled-components'
import SimpleMenu from '../../components/SimpleMenu'
import { motion } from "framer-motion"

const TaskList = (props) =>{
    const [refresh, setRefresh] = useState(false)
    let tasks = useSelector(state => state.taskListReducers.tasks)

    const dispatch = useDispatch()

    function rf (){
        setRefresh(!refresh)
    }

    useEffect(()=> {
        dispatch(taskListActions.fetchTasks(props.match.params.id))
        //seta que a página ativa é uma lista de tarefas
        dispatch(activeActions.setActive({
                id: props.match.params.id,
                type: 'list'
            }))
        //fecha o menu quando a lista de tarefas é carregada
        dispatch(menuActions.setOpen(false))
    }, [refresh])

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

        return(
            <Body>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                <TaskUl>
                    {tasks.map(task => <Tarefa key={task._id} task={task} refresh ={rf}/>)}
                </TaskUl>
                <NewTaskModal />
                </motion.div>
            </Body> 
        )
}


const Tarefa = (props)=>{
        
    let link = `/task/${props.task._id}`

    const dispatch = useDispatch()

    function handleStatus(id, sta) {
        const checkbox = document.getElementById(id)
        if(sta === 'pendente'){
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
        props.refresh() 
    }
    
//onChange
    return (
        <Task>
            <div className="checkbox-4" >
                <input type="checkbox" 
                    id={props.task._id} 
                    value={props.task._id}
                    onChange={() => handleStatus(props.task._id, props.task.status)} 
                    checked={props.task.status === 'pendente' ? false :  true}
                />
                <label htmlFor={props.task._id}></label>
            </div>
            <Link to={link} >
                <div className='check-text'>
                    {props.task.status === 'pendente' ? <span>{props.task.nome}</span> : <del>{props.task.nome}</del>}
                </div>
            </Link>
            <SimpleMenu task={props.task}/>
        </Task>
    )
}

export default TaskList