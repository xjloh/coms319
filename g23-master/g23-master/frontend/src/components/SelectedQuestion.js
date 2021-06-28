import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Nav from './Nav';
import {fetchQuestionById} from '../actions/question';
import Solution from './Solution';
import SolutionForm from './SolutionForm';

class SelectedQuestion extends Component{

    componentDidMount(){
        this.fetchQ();
        window.scrollTo(0,0)
    }

    fetchQ=()=>{
        const id = this.props.location.pathname.split('/')[2];
        this.props.fetchQuestionById({id: id});

    }

    render(){
        const {question} = this.props;
        return(
            <div>
                <Header/>
                <Nav/>
                <div className="column">
                    {question[0] &&
                        <div className="card">
                            <h3>{question[0].questionBody}</h3>
                            <p>
                                <strong>{question[0].questionAuthor}</strong>
                                {' asked on: ' + 
                                new Date(question[0].dateAsked).getMonth() + '/' + 
                                new Date(question[0].dateAsked).getDate() + '/' + 
                                new Date(question[0].dateAsked).getFullYear()}
                            </p>
                        </div>
                    }
                    <Solution id={this.props.location.pathname.split('/')[2]}/>
                </div>
                <div className="column">
                    <SolutionForm id={this.props.location.pathname.split('/')[2]}/>
                </div>
            </div>
        )
    }
}

export default connect(
    ({question})=>({question}), 
    {fetchQuestionById}
)(SelectedQuestion);