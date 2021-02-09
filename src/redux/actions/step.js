import { actionsTypes } from '../constants/step'

export function addStep (step) {
    return function (dispatch) {
        dispatch (addStepBegin())

        fetch('http://localhost:8081/add-step', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(step)})
            .then(res => res.json())
            .then(data => {
                dispatch(addStepSuccess(data.msg))
                console.log(data.msg)
            })
            .catch (error => dispatch(addStepFailure(error)))
    }
}

export function fetchSteps(id){
    return function (dispatch) {
        dispatch (fetchStepsBegin())

        fetch (`http://localhost:8081/find-steps/${id}`)
                .then(res => res.json())
                .then(data => {
                    dispatch (fetchStepsSuccess(data.etapas))
                    console.log(data)
                })
                .catch(error => dispatch(fetchStepsFailure(error)))
    }
}

export function editStep (step) {
    return function (dispatch) {
        dispatch (editStepBegin)
        fetch('http://localhost:8081/edit-step', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(step)
        })
        .then(res => res.json())
        .then(data => {
            dispatch (editStepSuccess(data.msg))
            console.log(data.msg)
        })
        .catch(error => dispatch (editStepFailure(error)))
    }
}

export function deleteStep (data) {
    return function (dispatch) {
        dispatch (deleteStepBegin)
        fetch('http://localhost:8081/delete-step', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            dispatch (deleteStepSuccess(data.msg))
        })
        .catch(error => {
            dispatch (deleteStepFailure(error))
        })
    }
}


// ----------- ADD ---------------------
export const addStepBegin = ()=> ({
    type : actionsTypes.ADD_STEP_BEGIN
})

export const addStepSuccess = (data)=> ({
    type : actionsTypes.ADD_STEP_SUCCESS,
    payload : { data }
})

export const addStepFailure = (error) => ({
    type: actionsTypes.ADD_STEP_FAILURE,
    payload : { error }
})


//fetch -----------------------------------
export const fetchStepsBegin = () => ({
    type: actionsTypes.FETCH_STEP_BEGIN
})

export const fetchStepsSuccess = (data) => ({
    type: actionsTypes.FETCH_STEP_SUCCESS,
    payload: { data }
})

export const fetchStepsFailure = error => ({
    type: actionsTypes.FETCH_STEP_FAILURE,
    payload: { error }
})

//edit stage -------------------------------
export const editStepBegin = () => ({
    type: actionsTypes.EDIT_STEP_BEGIN
})

export const editStepSuccess = (data) => ({
    type: actionsTypes.EDIT_STEP_SUCCESS,
    payload: { data }
})

export const editStepFailure = error => ({
    type: actionsTypes.EDIT_STEP_FAILURE,
    payload: { error }
})

//delete stage ------------------------------
export const deleteStepBegin = () => ({
    type: actionsTypes.DELETE_STEP_BEGIN
})

export const deleteStepSuccess = (data) => ({
    type: actionsTypes.DELETE_STEP_SUCCESS,
    payload: { data }
})

export const deleteStepFailure = error => ({
    type: actionsTypes.DELETE_STEP_FAILURE,
    payload: { error }
})