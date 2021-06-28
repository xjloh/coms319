const connection = require('../../database');

class SolutionTable{
    static getAllSolutions(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM solution', (err, response) => {
                if(err){
                    return reject(err);
                }
                const solutions = response.rows;
                resolve({solutions}); 
            })
        })
    }

    static getSolutionsForQ(questionId){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM solution WHERE solution."questionId" = $1 ORDER BY id DESC',
            [questionId],
            (err, response) => {
                if(err){
                    return reject(err);
                }
                resolve(response.rows); 
            })
        })
    }

    static storeSolution(solution){
        const {solutionAuthor, solutionBody, datePosted, questionId} = solution;
        return new Promise((resolve, reject)=>{
            connection.query(
                'INSERT INTO solution("solutionAuthor", "solutionBody", "datePosted", "questionId") VALUES($1, $2, $3, $4) RETURNING id',
                [solutionAuthor, solutionBody, datePosted, questionId],
                (err, response)=>{
                    if(err) return reject(err);

                    const sId = response.rows[0].id;
                    resolve({sId});
                }
            )
        })
    }
}

module.exports = SolutionTable;