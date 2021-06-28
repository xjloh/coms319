import {SOLUTION} from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_SOLUTION = [];

const solutionReducer = (state = DEFAULT_SOLUTION, action) => {
    switch(action.type){
        case SOLUTION.FETCH:
            return { ...state, status: fetchStates.fetching};
        case SOLUTION.FETCH_ERROR:
            return {...state, message: action.message, status: fetchStates.error};
        case SOLUTION.FETCH_SUCCESS:
            return {...state, solution: [...action.solution], status: fetchStates.success};
        case SOLUTION.SUBMIT_SUCCESS:
            return {...state, message: action.message, status: fetchStates.success}
        default:
            return state;
    }
}

export default solutionReducer;