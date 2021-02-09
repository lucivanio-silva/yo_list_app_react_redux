import React, { useEffect, useState } from 'react'
import { Body, Task, TaskUl } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as taskListActions from '../../redux/actions/taskList'
import * as menuActions from '../../redux/actions/menu'
import * as taskActions from '../../redux/actions/task'
import moment from 'moment'
import SimpleMenu from '../../components/SimpleMenu'

const TaskToday = (props) => {
    const [refresh, setRefresh] = useState(false)
    let tasks = useSelector(state => state.taskListReducers.tasks)
    const dispatch = useDispatch()

    function fetchTasksByDate(){
        let date = new Date()
        dispatch(taskListActions.fetchTasksByDate(
            {
                data: moment(date).format('YYYY-MM-DD')
            }
        ))
    }

    function rf (){
        setRefresh(!refresh)
    }

    useEffect( () => {
        dispatch(menuActions.setOpen(false))
    },[])

    useEffect( () => {
        fetchTasksByDate()
        //fecha o menu quando a lista de tarefas é carregada
    },[refresh])

    return (
        <Body>
            <TaskUl>
                {tasks.map(task => <Tarefa key={task._id} task={task} refresh ={rf}/>)}
            </TaskUl>
        </Body>
    )
}

const Tarefa = (props)=>{
        
    let link = `/task/${props.task._id}`

    const dispatch = useDispatch()

    //atualiza o status da tarefa de acordo com o estado do checkbox
    function handleStatus(id, sta) {
        const checkbox = document.getElementById(id)
        if(sta === 'pendente'){
            dispatch(taskActions.editTask ({
                _id: id,
                status: 'finalizada'
            }))
            checkbox.setAttribute('checked', false)
        }else {
            dispatch(taskActions.editTask ({
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

export default TaskToday