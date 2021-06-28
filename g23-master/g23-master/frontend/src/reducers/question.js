import {QUESTION} from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_QUESTION = [];

const questionReducer = (state = DEFAULT_QUESTION, action) => {
    switch(action.type){
        case QUESTION.FETCH:
            return { ...state, status: fetchStates.fetching};
        case QUESTION.FETCH_ERROR:
            return {...state, message: action.message, status: fetchStates.error};
        case QUESTION.FETCH_SUCCESS:
            return {...state, question: [...action.question], status: fetchStates.success};
        case QUESTION.SUBMIT_SUCCESS:
            return {...state, message: action.message, status: fetchStates.success}
        case QUESTION.FETCH_SINGLE_SUCCESS:
            return {...state, ...action.question, status: fetchStates.success}
        default:
            return state;
    }
}

export default questionReducer;