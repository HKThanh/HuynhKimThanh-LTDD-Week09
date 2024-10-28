import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

export default reducer;