import * as actions from '../actionTypes.js';
import axios from 'axios';

export const getSearchResults = keyword => {
    return dispatch => {
        dispatch({ type: actions.START_LOADING });

        if(keyword !== '') {
            axios.get(`http://43.240.103.34/api.shadhin/api/search?keyword=${keyword}`)
             .then(response => {
                //  console.log(response)
                 dispatch({ 
                     type: actions.FETCH_SEARCH_RESULT,
                     payload: response.data
                  });
             }).catch(err => {
                    console.log(err);
                    dispatch({ type: actions.END_LOADING });
             });
        }else {
            dispatch({ type: actions.CLEAR_SEARCH_RESULT });
        }
    }
}

export const clearSearchResult = () => {
    return dispatch => {
        dispatch({ type: actions.CLEAR_SEARCH_RESULT });
    }
}