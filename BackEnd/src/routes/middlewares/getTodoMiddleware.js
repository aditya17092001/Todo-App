const jwt = require("jsonwebtoken");
const zod = require("zod");
const { Todo } = require("../../db");
require('dotenv').config();

const getTodoMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(404).json({ Error: "Please try again" });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const todo = await Todo.find({
            userId: decoded.userId,
        })
        req.todos = todo;
        console.log(todo);
        next();

    } catch(error) {
        return res.status(404).json({ message: "Please try again" });
    }


}

module.exports = getTodoMiddleware;