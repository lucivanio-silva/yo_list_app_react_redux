import { actionsTypes } from '../constants/task'
import * as activeActions from './active'

//busca de uma unica tarefa pelo id da mesma
export function fetchTask (id){
    return function (dispatch) {
        dispatch (fetchTaskBegin())
        fetch (`http://localhost:8081/findone-task/${id}`)
                .then(res => res.json())
                .then(data => {
                    //transformando a tarefa achada em um array para evitar erros
                    dispatch (fetchTaskSuccess(data.tarefa))
                    //toda vez que uma tarefa é buscada o item ativo passa a ser uma tarefa
                    dispatch(activeActions.setActive(
                        {
                            listId: data.tarefa.lista,
                            taskId: data.tarefa._id,
                            name: data.tarefa.nome,
                            type: 'task'
                        }
                    ))
                })
                .catch(error => dispatch(fetchTaskFailure(error)))
    }
}

export function addTask(task) {
    return function (dispatch) {
        dispatch (addTaskBegin())

        fetch('http://localhost:8081/add-task', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)})
            .then(res=>res.json())
            .then(data => {
                dispatch(addTaskSuccess(data.msg))
            })
            .catch (error => dispatch(addTaskFailure(error)))
    }
}

export function editTask(task){
    return function (dispatch) {
        dispatch (editTaskBegin())
        fetch('http://localhost:8081/edit-task', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)})
        .then(res=>res.json())
        .then(data => {
            dispatch(editTaskSuccess(data.msg))
        })
        .catch (error => dispatch(editTaskFailure(error)))
    }
}

export function deleteTask(task) {
    return function (dispatch) {
        dispatch(deleteTaskBegin())
        fetch('http://localhost:8081/delete-task', {
                    method: 'post',
                    headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(task)})
            .then(res=>res.json())
            .then(data => {
                dispatch(deleteTaskSuccess(data.msg))
            })
            .catch (error => dispatch(deleteTaskFailure(error)))
    }
}

//fetch by id -----------------------------------
export const fetchTaskBegin = () => ({
    type: actionsTypes.FETCH_TASK_BEGIN
})

export const fetchTaskSuccess = data => ({
    type: actionsTypes.FETCH_TASK_SUCCESS,
    payload: { data }
})

export const fetchTaskFailure = error => ({
    type: actionsTypes.FETCH_TASK_FAILURE,
    payload: { error }
})


//ADD ------------------------------------------
export const addTaskBegin = () => ({
    type: actionsTypes.ADD_TASK_BEGIN
})

export const addTaskSuccess = data => ({
    type: actionsTypes.ADD_TASK_SUCCESS,
    payload: { data }
})

export const addTaskFailure = error => ({
    type: actionsTypes.ADD_TASK_FAILURE,
    payload: { error }
})

// edit task -------------------------------------
export const editTaskBegin = () => ({
    type: actionsTypes.EDIT_TASK_BEGIN
})

export const editTaskSuccess = data => ({
    type: actionsTypes.EDIT_TASK_SUCCESS,
    payload: { data }
})

export const editTaskFailure = error => ({
    type: actionsTypes.EDIT_TASK_FAILURE,
    payload: { error }
})

// delete task -------------------------------------
export const deleteTaskBegin = () => ({
    type: actionsTypes.REMOVE_TASK_BEGIN
})

export const deleteTaskSuccess = data => ({
    type: actionsTypes.REMOVE_TASK_SUCCESS,
    payload: { data }
})

export const deleteTaskFailure = error => ({
    type: actionsTypes.REMOVE_TASK_FAILURE,
    payload: { error }
})