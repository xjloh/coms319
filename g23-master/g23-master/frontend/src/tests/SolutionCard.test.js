import React from 'react';
import { render } from '@testing-library/react';
import SolutionCard from require('./../components/SolutionCard');

const dummyData = {
    "solutionId": 1,
    "solutionAuthor": "Carter",
    "solutionBody": "Good Response",
    "datePosted": "2020-10-15T15:56:18.958Z",
    "questionId" : 1
};

const badData ={
    "badData" : 8675309
}

function getSolution(props){
    return render(
        <SolutionCard data={props}/>
    )
}

describe("Single solution component", () =>{
    it("won't render bad data", ()=>{
        const {queryByTestId} = getSolution(badData);
        expect(queryByTestId("solutionAuthor")).toBeNull();
    });

    it("will render author", ()=>{
        const {queryByTestId} = getSolution(dummyData);
        expect(queryByTestId("solutionAuthor")).toBeTruthy();
    });

    it("will render the solution text", ()=>{
        const {queryByTestId} = getSolution(dummyData);
        expect(queryByTestId("solutionBody")).toBeTruthy();
    });
})
