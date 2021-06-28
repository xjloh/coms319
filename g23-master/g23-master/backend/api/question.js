const {Router} = require('express');
const Question = require('../app/question/question');
const QuestionTable = require('./../app/question/questionTable');

const router = new Router();

router.get('/all', (req, res)=>{
    QuestionTable.getAllQuestions()
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            console.log(error);
        })
});

router.get('/:questionId', (req, res)=>{
    QuestionTable.getQuestionById(req.params.questionId)
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            error(error)
        })
})


router.post('/new', (req, res)=>{
    console.log('req.body', req.body)
    let newQ = new Question({questionBody: req.body.questionBody, questionAuthor: req.body.questionAuthor});
    console.log('newQ:', newQ);
    QuestionTable.storeQuestion(newQ)
        .then((rows)=>{
            res.json(rows);
        })
        .catch((err)=>{
            console.log(err)
        })
});

module.exports = router;