const DEFAULT_PROPERTIES = {
    commentId: undefined,
    commentAuthor: undefined,
    commentBody: '',
    dateCommented: new Date(),
    solutionId: undefined
}

class Comment{
    constructor({commentId, commentAuthor, commentBody, dateCommented, solutionId}){
        this.commentId = commentId || DEFAULT_PROPERTIES.commentId;
        this.commentAuthor = commentAuthor || DEFAULT_PROPERTIES.commentAuthor;
        this.commentBody = commentBody || DEFAULT_PROPERTIES.commentBody;
        this.dateCommented = dateCommented || DEFAULT_PROPERTIES.dateCommented;
        this.solutionId = solutionId || DEFAULT_PROPERTIES.solutionId;
    }
}
module.exports = Comment;  