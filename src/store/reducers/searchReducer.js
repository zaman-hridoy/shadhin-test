import * as actions from '../actionTypes.js';

const initialState = {
    loading: false,
    results: null
}

const searchReducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.START_LOADING:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_SEARCH_RESULT:
            return {
                ...state,
                results: action.payload,
                loading: false
            }
        case actions.CLEAR_SEARCH_RESULT:
            return {
                ...state,
                results: null,
                loading: false
            }
        case actions.END_LOADING:
            return {
                ...state,
                loading: false
            }
        default: 
            return state;
    }
}

export default searchReducer;