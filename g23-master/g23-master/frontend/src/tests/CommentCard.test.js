import React from 'react';
import { render } from '@testing-library/react';
import CommentCard from require('./../components/CommentCard');

const dummyData = {
    "commentId": 1,
    "commentAuthor": "Jamie",
    "commentBody": "I don't agree with this response",
    "dateCommented": "2020-10-15T15:56:18.958Z",
    "solutionId" : 1
};

const badData ={
    "badData" : 8675309
}

function getComment(props){
    return render(
        <CommentCard data={props}/>
    )
}

describe("Single comment component", () =>{
    it("won't render bad data", ()=>{
        const {queryByTestId} = getComment(badData);
        expect(queryByTestId("commentAuthor")).toBeNull();
    });

    it("will render author", ()=>{
        const {queryByTestId} = getComment(dummyData);
        expect(queryByTestId("commentAuthor")).toBeTruthy();
    });

    it("will render the comment text", ()=>{
        const {queryByTestId} = getComment(dummyData);
        expect(queryByTestId("commentBody")).toBeTruthy();
    });
})
