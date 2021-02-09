import { actionsTypes } from '../constants/step'

const INITIAL_STATE = {
    steps: [],
    loading: null,
    error: null,
    msg:''
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.ADD_STEP_BEGIN :
            return {
                ...state,
                loading : true,
                error: null,
            }
        
        case actionsTypes.ADD_STEP_SUCCESS :
            return {
                ...state,
                loading: false,
                msg: action.payload.msg
            }

        case actionsTypes.ADD_STEP_FAILURE :
            return {
                ...state,
                loading : false,
                error : action.payload.error,
                steps: []
            }

        case actionsTypes.FETCH_STEP_BEGIN :
            return {
                ...state,
                loading : true,
                error : null
            }

        case actionsTypes.FETCH_STEP_SUCCESS :
            return {
                ...state,
                loading : false,
                steps : action.payload.data
            }

        case actionsTypes.FETCH_STEP_FAILURE :
            return {
                ...state,
                loading : false,
                error : action.payload.error,
                steps: []
            }

        case actionsTypes.EDIT_STEP_BEGIN :
            return {
                ...state,
                loading: true,
                error : null
            }
        
        case actionsTypes.EDIT_STEP_SUCCESS :
            return {
                ...state,
                loading: false,
                msg: action.payload.msg
            }

        case actionsTypes.EDIT_STEP_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                steps: []
            }

        case actionsTypes.DELETE_STEP_BEGIN :
            return {
                ...state,
                loading: true,
                error: null
            }

        case actionsTypes.DELETE_STEP_SUCCESS :
            return {
                ...state,
                loading: false,
                msg: action.payload.msg
            }

        case actionsTypes.DELETE_STEP_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                steps: []
            }

        default :
            return state
    }
}

export { reducers }