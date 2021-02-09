import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/step'
import {DeleteStepModal} from '../../components/modals/DeleteStepModal'
import { CheckBoxStep } from '../../components/checkBox/CheckBoxStep' 

const StepList = (props) => {
    
    let steps = useSelector (state => state.stepReducers.steps)
    //para pegar a task ativa, (pq, quando da refresh o props perde seu valor)
    let task = useSelector (state => state.activeReducers.elementInfo)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(actions.fetchSteps(props.task))
    },[])

    return (
        <div id='step'>
            {steps.map(step =>
                <CheckBoxStep key={step._id} data={step} />
            )}
        </div>
    )
}

export default StepList