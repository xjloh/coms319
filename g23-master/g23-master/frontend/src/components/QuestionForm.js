import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import {submitQuestion, fetchAllQuestions} from '../actions/question';

class QuestionForm extends Component{
    state = {
        questionBody: '',
        questionAuthor: ''
    }

    updateQuestionBody = (e) => {
        this.setState({questionBody: e.target.value});
    }

    updateQuestionAuthor = (e) => {
        this.setState({questionAuthor: e.target.value});
    }

    submitQuestion = () => {
        const {questionAuthor, questionBody} = this.state;
        this.props.submitQuestion({questionAuthor, questionBody});
        setTimeout(()=>{
            this.props.fetchAllQuestions();
        }, 500)
    }

    render(){
        return(
            <div className="question-form">
                <FormGroup>
                    <FormControl
                        className="question-form-author"
                        onChange={this.updateQuestionAuthor}
                        type='text'
                        value={this.state.questionAuthor}
                        placeholder='author'
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl 
                        className="question-form-body"
                        onChange={this.updateQuestionBody}
                        type='text'
                        value={this.state.questionBody}
                        placeholder='question'
                    />
                </FormGroup>
                <Button className="submitButton" onClick={this.submitQuestion}>ASK!</Button>
            </div>
        )
    }
}
export default connect(null, {submitQuestion, fetchAllQuestions})(QuestionForm);