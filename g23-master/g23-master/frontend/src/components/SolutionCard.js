import React from 'react';

class SolutionCard extends React.Component {
    
    render() {
        const { id, solutionAuthor, solutionBody, datePosted} = this.props.data;
        const displayDate = new Date(datePosted);

        return(
        <div key={id} className='solution-card'>
            <h4>{solutionAuthor}</h4>
            <p>{displayDate.getMonth() + '/' + displayDate.getDate() + '/' + displayDate.getFullYear()}</p>
            <p>{solutionBody}</p>
        </div>
        )
    }
}
export default SolutionCard;