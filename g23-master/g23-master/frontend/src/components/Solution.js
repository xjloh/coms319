import React from 'react';
import {connect} from 'react-redux';
import {fetchSolutionByQuestionId} from '../actions/solution';
import {fetchAllComments} from "../actions/comment";
import SolutionCard from './SolutionCard';
import Comments from "./Comments";

class Solution extends React.Component {

    componentDidMount(){
        this.fetchSolutionsAndComments();
    }

    fetchSolutionsAndComments=()=>{
        this.props.fetchSolutionByQuestionId({id: this.props.id});
        this.props.fetchAllComments();
    }

    render() {
        const {solution} = this.props;

        return (
            <div >  
                <h2 className="posts_heading">Question Solutions:</h2>
                {solution.solution && solution.solution.map(s => 
                    <div class="solution-post">
                        <SolutionCard key={s.id} data={s} />
                        {/* Comments.js will go here, make sure to pass in id={s.id} */}
                        {this.props.comment.comment && <Comments data={this.props.comment} id={s.id}/>}
                    </div>
                )}
            </div>
        );
    }
}
export default connect(
    ({solution, comment})=>({solution, comment}),
    {fetchSolutionByQuestionId, fetchAllComments}
)(Solution);