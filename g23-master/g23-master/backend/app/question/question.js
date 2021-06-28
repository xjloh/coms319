const DEFAULT_PROPERTIES = {
    questionId: undefined,
    questionAuthor: undefined,
    questionBody: '',
    dateAsked: new Date()
}

class Question{
    constructor({questionId, questionAuthor, questionBody, dateAsked}){
        this.questionId = questionId || DEFAULT_PROPERTIES.questionId;
        this.questionAuthor = questionAuthor || DEFAULT_PROPERTIES.questionAuthor;
        this.questionBody = questionBody || DEFAULT_PROPERTIES.questionBody;
        this.dateAsked = dateAsked || DEFAULT_PROPERTIES.dateAsked;
    }
}
module.exports = Question;  