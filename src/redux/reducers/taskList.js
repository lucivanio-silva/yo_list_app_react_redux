import { actionsTypes } from '../constants/taskList'

const INITIAL_STATE = {
    tasks: [],
    loading: false,
    error: null,
    msg: null
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
                tasks: action.payload.data
            }

        case actionsTypes.FETCH_TASK_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                tasks: []
            }
        case actionsTypes.FETCH_TASK_BY_DATE_BEGIN :
            return {
                ...state,
                loading: true,
                error: null
            }
            
        case actionsTypes.FETCH_TASK_BY_DATE_SUCCESS :
            return {
                ...state,
                loading: false,
                tasks: action.payload.data
            }
    
        case actionsTypes.FETCH_TASK_BY_DATE_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                tasks: []
            }

        default :
            return state        
    }
}

export { reducers }