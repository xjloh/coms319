import {QUESTION} from './types';

export const fetchAllQuestions = () => dispatch =>{
    dispatch({type: QUESTION.FETCH});


    return fetch('http://localhost:3000/question/all')
    .then( response => response.json())
    .then(json => {
        if(json.type === 'error'){
            dispatch({
                type: QUESTION.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: QUESTION.FETCH_SUCCESS,
                question: json.questions
            });
        }; 
    })
    .catch(error => dispatch({
        type:QUESTION.FETCH_ERROR, 
        message: error.message
    }));
}

export const submitQuestion = ({questionAuthor, questionBody}) => dispatch =>{
    dispatch({type: QUESTION.FETCH});
    
    return fetch('http://localhost:3000/question/new',{
        method: 'POST',
        body: JSON.stringify({questionBody, questionAuthor}),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    }).then(json => {
        if(json.type === 'error'){
            dispatch({
                type: QUESTION.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: QUESTION.SUBMIT_SUCCESS,
                submittedQ: json.qId
            });
        }; 
    })
    .catch(error => dispatch({
        type:QUESTION.FETCH_ERROR, 
        message: error.message
    }));
}

export const fetchQuestionById = ({id}) => dispatch =>{
    dispatch({type: QUESTION.FETCH});


    return fetch(`http://localhost:3000/question/${id}`)
    .then( response => response.json())
    .then(json => {
        if(json.type === 'error'){
            dispatch({
                type: QUESTION.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: QUESTION.FETCH_SINGLE_SUCCESS,
                question: json
            });
        }; 
    })
    .catch(error => dispatch({
        type:QUESTION.FETCH_ERROR, 
        message: error.message
    }));
}