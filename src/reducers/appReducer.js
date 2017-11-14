const defaultState = {
    value: 7
}


function appReducer (state = defaultState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return state;
    }    
}

export default appReducer;
