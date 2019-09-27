const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT': 
            return {
            ...state,
            counter: state.counter - 1
            }
        case 'SUBTRACT': 
            return {
            ...state,
            counter: state.counter - action.value
            }
        case 'ADD': 
            return {
            ...state,
            counter: state.counter + action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT': 
            const id = 2;
            state.results.splice(id, 1)
            return {
                ...state,
            }
    }
    return state;
};

export default reducer;