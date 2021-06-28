import {COMMENT} from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_COMMENT = [];

const commentReducer = (state = DEFAULT_COMMENT, action) => {
    switch(action.type){
        case COMMENT.FETCH:
            return { ...state, status: fetchStates.fetching};
        case COMMENT.FETCH_ERROR:
            return {...state, message: action.message, status: fetchStates.error};
        case COMMENT.FETCH_SUCCESS:
            return {...state, comment: [...action.comment], status: fetchStates.success};
        case COMMENT.SUBMIT_SUCCESS:
            return {...state, message: action.message, status: fetchStates.success}
        default:
            return state;
    }
}

export default commentReducer;