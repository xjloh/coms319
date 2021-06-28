import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import {submitComment, fetchAllComments} from "../actions/comment";

class QuestionForm extends Component{
    state = {
        commentBody: '',
        commentAuthor: ''
    }

    updateCommentBody = (e) => {
        this.setState({commentBody: e.target.value});
    }

    updateCommentAuthor = (e) => {
        this.setState({commentAuthor: e.target.value});
    }

    submitComment = () => {
        const {commentAuthor, commentBody} = this.state;
        const solutionId = this.props.id;
        this.props.submitComment({commentAuthor, commentBody, solutionId});
        setTimeout(()=>{
            this.props.fetchAllComments();
        }, 500)
        window.location.reload()
    }

    render(){
        return(
            <div className="question-form">
                <FormGroup>
                    <FormControl
                        className="question-form-author"
                        onChange={this.updateCommentAuthor}
                        type='text'
                        value={this.state.commentAuthor}
                        placeholder='author'
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        className="question-form-body"
                        onChange={this.updateCommentBody}
                        type='text'
                        value={this.state.commentBody}
                        placeholder='comment'
                    />
                </FormGroup>
                <Button className="submitButton" onClick={this.submitComment}>SEND!</Button>
            </div>
        )
    }
}
export default connect(null, {submitComment, fetchAllComments})(QuestionForm);