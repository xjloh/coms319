const connection = require('../../database');

class CommentTable{
    static getAllComments(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM comment order by id DESC', (err, response) => {
                if(err){
                    return reject(err);
                }
                resolve(response.rows); 
            })
        })
    }

    static getCommentsForSolution(solutionId){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM comment WHERE comment."solutionId" = $1 ORDER BY id DESC',
            [solutionId],
            (err, response) => {
                if(err){
                    return reject(err);
                }
                resolve(response.rows); 
            })
        })
    }

    static storeComment(comment){
        const {commentAuthor, commentBody, dateCommented, solutionId} = comment;
        return new Promise((resolve, reject)=>{
            connection.query(
                'INSERT INTO comment("commentAuthor", "commentBody", "dateCommented", "solutionId") VALUES($1, $2, $3, $4) RETURNING id',
                [commentAuthor, commentBody, dateCommented, solutionId],
                (err, response)=>{
                    if(err) return reject(err);

                    const commentId = response.rows[0].id;
                    resolve({commentId});
                }
            )
        })
    }
}
module.exports = CommentTable;