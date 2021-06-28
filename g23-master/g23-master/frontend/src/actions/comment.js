import {COMMENT} from './types';

export const fetchCommentsBySolutionId = ({id}) => dispatch =>{
    dispatch({type: COMMENT.FETCH});

    return fetch(`http://localhost:3000/comment/${id}`)
        .then( response => response.json())
        .then(json => {
            if(json.type === 'error'){
                dispatch({
                    type: COMMENT.FETCH_ERROR,
                    message: json.message
                })
            } else {
                console.log(`json for ${id}`, json)
                dispatch({
                    type: COMMENT.FETCH_SUCCESS,
                    comment: json
                });
            };
        })
        .catch(error => dispatch({
            type:COMMENT.FETCH_ERROR,
            message: error.message
        }));
}

export const submitComment = ({commentAuthor, commentBody, solutionId}) => dispatch =>{
    dispatch({type: COMMENT.FETCH});
    return fetch('http://localhost:3000/comment/new',{
        method: 'POST',
        body: JSON.stringify({commentBody, commentAuthor, solutionId}),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    }).then(json => {
        if(json.type === 'error'){
            dispatch({
                type: COMMENT.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: COMMENT.SUBMIT_SUCCESS,
                //not sure
                submittedQ: json.sId
            });
        };
    })
        .catch(error => dispatch({
            type:COMMENT.FETCH_ERROR,
            message: error.message
        }));
}

export const fetchAllComments = () => dispatch =>{
    dispatch({type: COMMENT.FETCH});

    return fetch('http://localhost:3000/comment/all')
    .then( response => response.json())
    .then(json => {
        if(json.type === 'error'){
            dispatch({
                type: COMMENT.FETCH_ERROR,
                message: json.message
            })
        } else {
            dispatch({
                type: COMMENT.FETCH_SUCCESS,
                comment: json
            });
        }; 
    })
    .catch(error => dispatch({
        type:COMMENT.FETCH_ERROR, 
        message: error.message
    }));
}