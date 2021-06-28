const { Router } = require('express');
const Solution = require('../app/solution/solution');
const DUMMY_DATA = require('../data/solutions');
const SolutionTable = require('./../app/solution/solutionTable');

const router = new Router();

// only for early testing 
router.get('/dummy', (req, res)=>{
    res.json(DUMMY_DATA)
});

router.get('/all', (req, res)=>{
    SolutionTable.getAllSolutions()
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            console.log(error);
        })
})

router.get('/:questionId', (req, res)=>{
    SolutionTable.getSolutionsForQ(req.params.questionId)
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            error(error)
        })
})

router.post('/new', (req, res)=>{
    console.log('req.body', req.body)
    let newSolution = new Solution({
        solutionBody: req.body.solutionBody, 
        solutionAuthor: req.body.solutionAuthor,
        questionId: req.body.questionId
    });
    console.log('new solution:', newSolution);
    SolutionTable.storeSolution(newSolution)
        .then((rows)=>{
            res.json(rows);
        })
        .catch((err)=>{
            console.log(err)
        })
});

module.exports = router;