import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import {submitSolution, fetchSolutionByQuestionId } from '../actions/solution';

class QuestionForm extends Component{
    state = {
        solutionBody: '',
        solutionAuthor: ''
    }

    updateSolutionBody = (e) => {
        this.setState({solutionBody: e.target.value});
    }

    updateSolutionAuthor = (e) => {
        this.setState({solutionAuthor: e.target.value});
    }

    submitSolution = () => {
        const {solutionAuthor, solutionBody} = this.state;
        const questionId = this.props.id;
        this.props.submitSolution({solutionAuthor, solutionBody, questionId});
        setTimeout(()=>{
            this.props.fetchSolutionByQuestionId({id: questionId});
        }, 500)
    }

    render(){
        return(
            <div className="question-form">
                <FormGroup>
                    <FormControl
                        className="question-form-author"
                        onChange={this.updateSolutionAuthor}
                        type='text'
                        value={this.state.solutionAuthor}
                        placeholder='author'
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl 
                        className="question-form-body"
                        onChange={this.updateSolutionBody}
                        type='text'
                        value={this.state.solutionBody}
                        placeholder='solution'
                    />
                </FormGroup>
                <Button className="submitButton" onClick={this.submitSolution}>ANSWER!</Button>
            </div>
        )
    }
}
export default connect(null, {submitSolution, fetchSolutionByQuestionId})(QuestionForm);