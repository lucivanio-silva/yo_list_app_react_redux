import { actionsTypes } from '../constants/taskList'

export function fetchTasks(listId){
    return function (dispatch) {
        dispatch (fetchTasksBegin())

        fetch (`http://localhost:8081/find-task/${listId}`)
                .then(res => res.json())
                .then(data => {
                    dispatch (fetchTasksSuccess(data.tarefas, {parent: listId}))
                    console.log(listId)
                })
                .catch(error => dispatch(fetchTasksFailure(error)))
    }
}

export function fetchTasksByDate (task){
    return function (dispatch) {
        dispatch (fetchTaskByDateBegin())
        fetch('http://localhost:8081/find-task-by-date', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)})
        .then(res=>res.json())
        .then(data => {
            dispatch(fetchTaskByDateSuccess(data.tarefas))
            console.log(data)
        })
        .catch (error => dispatch(fetchTaskByDateFailure(error)))
    }
}


export const fetchTasksBegin = () => ({
    type: actionsTypes.FETCH_TASK_BEGIN
})

export const fetchTasksSuccess = (data, info) => ({
    type: actionsTypes.FETCH_TASK_SUCCESS,
    payload: { data, info }
})

export const fetchTasksFailure = error => ({
    type: actionsTypes.FETCH_TASK_FAILURE,
    payload: { error }
})

//----fetch-by-date------------------------------
export const fetchTaskByDateBegin = () => ({
    type: actionsTypes.FETCH_TASK_BY_DATE_BEGIN
})

export const fetchTaskByDateSuccess = data => ({
    type: actionsTypes.FETCH_TASK_BY_DATE_SUCCESS,
    payload: { data }
})

export const fetchTaskByDateFailure = error => ({
    type: actionsTypes.FETCH_TASK_BY_DATE_FAILURE,
    payload: { error }
})
