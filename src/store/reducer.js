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
            //filter takes a function as the input.
            //filter executes on each function on the array.
            const updatedArray = state.results.filter((result, index) => index !== id);
            return {
                ...state,
                results: newArray
            }
    }
    return state;
};

export default reducer;