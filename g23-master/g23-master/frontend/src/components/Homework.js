import React, {Component} from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import {fetchAllQuestions} from '../actions/question';
import QuestionForm from './QuestionForm';

class Homework extends Component {
    
    componentDidMount(){
        this.fetchAllQs();
    }

    fetchAllQs=()=>{
        this.props.fetchAllQuestions();
    }

    render() {
        const {question} = this.props;
        
        return (
            <div>
                <div className="column"> 
                    <h2 className="homework_heading">Homework assignments and questions</h2>
                    {question.question && question.question.map(q => 
                        <Question key={q.id} data={q}/>
                    )}
                </div>
                <div className="column"><QuestionForm/></div>
            </div>
        );
    }
}
export default connect(
    ({question})=>({question}), 
    {fetchAllQuestions}
)(Homework);