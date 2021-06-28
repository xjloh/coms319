import {SOLUTION} from './types';

export const fetchSolutionByQuestionId = ({id}) => dispatch =>{
    dispatch({type: SOLUTION.FETCH});

    return fetch(`http://localhost:3000/solution/${id}`)
    .then( response => response.json())
    .then(json => {
        if(json.type === 'error'){
            dispatch({
                type: SOLUTION.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: SOLUTION.FETCH_SUCCESS,
                solution: json
            });
        }; 
    })
    .catch(error => dispatch({
        type:SOLUTION.FETCH_ERROR, 
        message: error.message
    }));
}

export const submitSolution = ({solutionAuthor, solutionBody, questionId}) => dispatch =>{
    dispatch({type: SOLUTION.FETCH});
    return fetch('http://localhost:3000/solution/new',{
        method: 'POST',
        body: JSON.stringify({solutionBody, solutionAuthor, questionId}),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    }).then(json => {
        if(json.type === 'error'){
            dispatch({
                type: SOLUTION.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: SOLUTION.SUBMIT_SUCCESS,
                submittedQ: json.sId
            });
        }; 
    })
    .catch(error => dispatch({
        type:SOLUTION.FETCH_ERROR, 
        message: error.message
    }));
}