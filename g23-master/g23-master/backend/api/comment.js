const {Router} = require('express');
const Comment = require('../app/comment/comment');
const CommentTable = require('./../app/comment/commentTable');

const router = new Router();

router.get('/all', (req, res)=>{
    CommentTable.getAllComments()
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            console.log(error);
        })
})

router.get('/:solutionId', (req, res)=>{
    CommentTable.getCommentsForSolution(req.params.solutionId)
        .then((rows)=>{
            res.json(rows);
        })
        .catch((error)=>{
            error(error)
        })
})

// router.get('/new/:commentBody/:commentAuthor/:solutionId', (req, res)=>{
//     let newComment = new Comment({
//         commentBody: req.params.commentBody,
//         commentAuthor: req.params.commentAuthor,
//         solutionId: req.params.solutionId
//     });
//     console.log('newComment:', newComment);
//     CommentTable.storeComment(newComment)
//         .then((rows)=>{
//             res.json(rows);
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
// })

router.post('/new', (req, res)=>{
    console.log('req.body', req.body)
    let newComment = new Comment({
        commentBody: req.body.commentBody,
        commentAuthor: req.body.commentAuthor,
        solutionId: req.body.solutionId
    });
    console.log('newComment:', newComment);
    CommentTable.storeComment(newComment)
        .then((rows)=>{
            res.json(rows);
        })
        .catch((err)=>{
            console.log(err)
        })
});

module.exports = router;