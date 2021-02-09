import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/task'
import * as activeActions from '../../redux/actions/active'
import { CheckBox } from '../../components/checkBox/CheckBox'
import { Container } from '../../components/Container'
import { motion } from 'framer-motion'
import FormEditTask from './FormEditTask'
import FormNewStep from './FormNewStep'
import StepList from './StepList'
import { Card } from '../../components/Card'



export const TaskView = (props)=>{
    let task = useSelector (state => state.taskReducers.task)
    let loading = useSelector (state => state.taskReducers.loading)

    const dispatch = useDispatch()

    //primeira renderização
    useEffect(()=>{
        dispatch(actions.fetchTask(props.match.params.id))
    }, [])

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    
    //a tarefa só é carregada quando a requisição termina de ser chamada
    return (
        <Container >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <Card>
                    <CheckBox data={task} />
                    <StepList task={props.match.params.id} />
                    <FormNewStep task={props.match.params.id} />
                    <FormEditTask task={task}/>
                </Card>
            </motion.div>        
        </Container>
    )
}