import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Question extends Component {

    render(){
        const { id, questionAuthor, dateAsked, questionBody} = this.props.data;
        const displayDate = new Date(dateAsked);
        return(
        <div className='card'>
            <h3>{questionBody}</h3>
            <Link to={{pathname: `/question/${id}`}}><Button className="submitButton">See Details</Button></Link>
            <p><strong>{questionAuthor}</strong>{' asked on:' + displayDate.getMonth() + '/' + displayDate.getDate() + '/' + displayDate.getFullYear()}</p>
            
        </div>
        )
    }
}
export default Question;