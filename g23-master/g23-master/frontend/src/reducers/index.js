import {combineReducers} from 'redux';
import question from './question';
import account from './account';
import solution from './solution';
import comment from './comment';

export default combineReducers({ question, account, solution, comment });