const express = require('express');
const cors = require('cors');
// const Solution = require('./solution/solution');
// const Comment = require('./comment/comment');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const solutionRouter = require('../api/solution');
const commentRouter = require('../api/comment');
const questionRouter = require('../api/question');
const accountRouter = require('../api/account');

const app = express();

// may be 1234 or 5100 -- seems inconsistent 
app.use(cors({ 
    origin: 'http://localhost:1234',
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/solution', solutionRouter);
app.use('/comment', commentRouter);
app.use('/question', questionRouter);
app.use('/account', accountRouter);

module.exports = app;