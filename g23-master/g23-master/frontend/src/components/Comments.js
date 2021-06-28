import React from 'react';
import {connect} from 'react-redux';
import {fetchAllComments} from "../actions/comment";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

class Comments extends React.Component {

    // componentDidMount(){
    //     this.fetchComments();
    // }

    // fetchComments=()=>{
    //     this.props.fetchAllComments({id: this.props.id});
    // }

    render() {
        const {comment} = this.props.data;
        // console.log('props in Comments', this.props)
        let correctComment = [];
        // if(comment.comment){
        //     comment.comment.forEach(c => {
        //         if(c.id == this.props.id) correctComment.push(c);
        //     })
        //     // console.log('correct comms', correctComment)
        // }
        comment.forEach(c =>{
            if(c.solutionId == this.props.id) correctComment.push(c)
        })
        console.log('corr comm', correctComment)
        return (
            <div >
                {/* <h2 className="posts_heading">Discussion</h2> */}
                {/* {comment.comment && comment.comment.map(c =>
                    <div>
                        <CommentCard key={c.id} data={c} />
                    </div>
                )} */}
                {correctComment.length > 0 && correctComment.map(c =>
                    <CommentCard key={c.id} data={c}/>
                )}
                <CommentForm id={this.props.id}/>
            </div>
        );
    }
}
// export default Comments;
export default connect(
    // ({comment})=>({comment}),
    // {fetchAllComments}
    null,null
)(Comments);