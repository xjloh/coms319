const DEFAULT_PROPERTIES = {
    solutionId: undefined,
    solutionAuthor: undefined,
    solutionBody: '',
    datePosted: new Date(),
    questionId: undefined
}

class Solution{
    constructor({solutionId, solutionAuthor, solutionBody, datePosted, questionId}){
        this.solutionId = solutionId || DEFAULT_PROPERTIES.solutionId;
        this.solutionAuthor = solutionAuthor || DEFAULT_PROPERTIES.solutionAuthor;
        this.solutionBody = solutionBody || DEFAULT_PROPERTIES.solutionBody;
        this.datePosted = datePosted || DEFAULT_PROPERTIES.datePosted;
        this.questionId = questionId || DEFAULT_PROPERTIES.questionId;
    }
}
module.exports = Solution;