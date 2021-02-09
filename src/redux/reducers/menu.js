const INITIAL_STATE = {
    open: false
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_OPEN' :
            return {
                ...state,
                open: action.payload.data
            }
        
        default :
            return state
    }
}

export { reducers }