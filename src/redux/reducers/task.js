import {actionsTypes} from '../constants/task'

const INITIAL_STATE = {
    task: {},
    loading: null,
    error: null,
    msg: null
}

//list ID é para poder identificar a qual lista as tasks pertencem

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionsTypes.FETCH_TASK_BEGIN :
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case actionsTypes.FETCH_TASK_SUCCESS :
            return {
                ...state,
                loading: false,
                task: action.payload.data
            }

        case actionsTypes.FETCH_TASK_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                task: {}
            }

        case actionsTypes.ADD_TASK_BEGIN :
            return {
                ...state,
                loading: true,
                error: null
            }
            
        case actionsTypes.ADD_TASK_SUCCESS :
            return {
                ...state,
                loading: false,
                msg: action.payload.msg
            }
            
        case actionsTypes.ADD_TASK_FAILURE :
            return {
                ...state,
                loading: false,
                error: actionsTypes.payload.error,
                task: {}
            }
            
        case actionsTypes.EDIT_TASK_BEGIN :
            return {
                ...state,
                loading: true,
                error: null
            }

        case actionsTypes.EDIT_TASK_SUCCESS :
            return {
                ...state,
                loadinng: false,
                msg: action.payload.msg
            }

        case actionsTypes.EDIT_TASK_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                task: {}
            }

        case actionsTypes.REMOVE_TASK_BEGIN :
            return {
                ...state,
                loading: true,
                error: null
            }

        case actionsTypes.REMOVE_TASK_SUCCESS :
            return {
                ...state,
                loading: false,
                msg: action.payload.msg,
            }

        case actionsTypes.REMOVE_TASK_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                task: {}
            }
        
        default :   
            return state
    }
}

export { reducers }
