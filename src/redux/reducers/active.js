const INITIAL_STATE = {
    elementInfo: {}
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_ACTIVE' :
            return {
                ...state,
                elementInfo: action.payload.data
            }
        
        default :
            return state
    }
}

export { reducers }