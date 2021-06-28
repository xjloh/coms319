import React from 'react';
import { render } from '@testing-library/react';
import Question from require('./../components/Question');

const dummyData = {
    "questionId": 1,
    "questionAuthor": "Jon",
    "questionBody": "First Post",
    "dateAsked": "2020-10-15T15:56:18.958Z"
};

const badData ={
    "badData" : 8675309
}

function getQuestion(props){
    return render(
        <Question data={props}/>
    )
}

describe("Single Question component", () =>{
    it("won't render bad data", ()=>{
        const {queryByTestId} = getQuestion(badData);
        expect(queryByTestId("questionAuthor")).toBeNull();
    });

    it("will render author", ()=>{
        const {queryByTestId} = getQuestion(dummyData);
        expect(queryByTestId("questionAuthor")).toBeTruthy();
    });

    it("will render the question text", ()=>{
        const {queryByTestId} = getQuestion(dummyData);
        expect(queryByTestId("questionBody")).toBeTruthy();
    });
})
