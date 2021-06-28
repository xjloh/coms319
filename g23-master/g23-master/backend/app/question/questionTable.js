const connection = require('../../database');

class QuestionTable{
    static getAllQuestions(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM question order by id DESC', (err, response) => {
                if(err){
                    return reject(err);
                }
                const questions = response.rows;
                resolve({questions}); 
            })
        })
    }

    static getQuestionById(questionId){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM question WHERE question.id = $1',
            [questionId],
            (err, response) => {
                if(err){
                    return reject(err);
                }
                resolve(response.rows); 
            })
        })
    }

    static storeQuestion(question){
        const {questionBody, questionAuthor, dateAsked} = question;
        return new Promise((resolve, reject)=>{
            connection.query(
                'INSERT INTO question("questionBody", "questionAuthor", "dateAsked") VALUES($1, $2, $3) RETURNING id',
                [questionBody, questionAuthor, dateAsked],
                (err, response)=>{
                    if(err) return reject(err);

                    const qId = response.rows[0].id;
                    resolve({qId});
                }
            )
        })
    }

}
module.exports = QuestionTable;