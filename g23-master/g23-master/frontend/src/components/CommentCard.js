import React, {Component} from 'react';

class Comment extends Component {

    render(){
        const { commentId, commentAuthor, commentBody, dateCommented, solutionId} = this.props.data;
        const displayDate = new Date(dateCommented);
        return(
            <div key={commentId} className='small-card'>
                <h4>{commentAuthor}</h4>
                <p>{displayDate.getMonth() + '/' + displayDate.getDate() + '/' + displayDate.getFullYear()}</p>
                <p>{commentBody}</p>
            </div>
        )
    }
}
export default Comment;
