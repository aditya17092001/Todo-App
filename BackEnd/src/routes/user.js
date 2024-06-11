const express = require('express');
const jwt = require('jsonwebtoken');
const signupMiddleware = require('./middlewares/signupMiddleware');
const signinMiddleware = require('./middlewares/signinMiddleware');
const addTodoMiddleware = require('./middlewares/addTodoMiddleware');
const getTodoMiddleware = require('./middlewares/getTodoMiddleware');
const updateTodoMiddleware = require('./middlewares/updateTodoMiddleware');
require('dotenv').config();

const router = express.Router();

router.post('/signup', signupMiddleware, (req, res) => {
    try {
        const userId = req.user_id;
        const token = jwt.sign({ userId }, process.env.JWT_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ Error: "Internal Server Error" });
    }
});

router.post('/signin', signinMiddleware, (req, res) => {
    try {
        const userId = req.user_id;
        const token = jwt.sign({ userId }, process.env.JWT_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ Error: "Intenal Server Error" });
    }
});

router.post('/addTodo', addTodoMiddleware, (req, res) => {
    res.status(200).json({ Success: "Todo Added Successfully" });
});

router.get('/getTodos', getTodoMiddleware, (req, res) => {
    const todos = req.todos;
    res.status(200).json({ todos });
});

router.put('/completed', updateTodoMiddleware, (req, res) => {
    res.status(200).json({ Success: "Todo Updated Successfully" });
});

module.exports = router;