import {actionsTypes} from '../constants/lists'

export function getData(){
    return function (dispath) {
        dispath (fetchListsBegin())

        fetch ('http://localhost:8081/get-categorias/lucivanio/5eebc53cf86874116824ce39')
            .then(res => res.json())
            .then(data => {
                dispath (fetchListsSuccess(data.categorias))
            })
            .catch(error => dispath(fetchListsFailure(error)))
    }
}

export function addList(list){
    return function (dispath) {
        dispath (addListBegin())

        fetch('http://localhost:8081/add-categoria', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(list)})
            .then(res=>res.json())
            .then(data => {
                dispath(addListSuccess(data.msg))
            })
            .catch(error => dispath(addListFailure(error)))
    }
}

export function removeList (list) {
    return function (dispath) {
        dispath (removeListBegin())

        fetch('http://localhost:8081/delete-categoria', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(list)})
            .then(res=>res.json())
            .then(data => {
                dispath(removeListSuccess(data.msg))
                console.log('success')
            })
            .catch(error => dispath(removeListFailure(error)))
    }
}

export function editList (list) {
    return function (dispath) {
        dispath (editListBegin())

        fetch('http://localhost:8081/edit-list', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(list)})
            .then(res=>res.json())
            .then(data => {
                dispath(editListSuccess(data.msg))
                console.log('editado com sucesso')
            })
            .catch(error => dispath(editListFailure(error)))
    }
}


function handleErrors(response) {
    if (!response.ok){
        throw Error (response.statusText)
    }
    return response
}

export const fetchListsBegin = () => ({
    type: actionsTypes.FETCH_LISTS_BEGIN
})

export const fetchListsSuccess = data => ({
    type: actionsTypes.FETCH_LISTS_SUCCESS,
    payload: { data }
})

export const fetchListsFailure = error => ({
    type: actionsTypes.FETCH_LISTS_FAILURE,
    payload: { error }
})

export const addListBegin = () => ({
    type: actionsTypes.ADD_LIST_BEGIN
})

export const addListSuccess = data => ({
    type: actionsTypes.ADD_LIST_SUCCESS,
    payload: { data }
})

export const addListFailure = error => ({
    type: actionsTypes.ADD_LIST_FAILURE,
    payload: { error }
})

export const removeListBegin = () => ({
    type: actionsTypes.REMOVE_LIST_BEGIN
})

export const removeListSuccess = data => ({
    type: actionsTypes.REMOVE_LIST_SUCCESS,
    payload: { data }
})

export const removeListFailure = error => ({
    type: actionsTypes.REMOVE_LIST_FAILURE,
    payload: { error }
})

export const editListBegin = () => ({
    type: actionsTypes.EDIT_LIST_BEGIN
})

export const editListSuccess = data => ({
    type: actionsTypes.EDIT_LIST_SUCCESS,
    payload: { data }
})

export const editListFailure = error => ({
    type: actionsTypes.EDIT_LIST_FAILURE,
    payload: { error }
})



