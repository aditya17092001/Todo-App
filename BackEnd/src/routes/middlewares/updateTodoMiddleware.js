const { Todo } = require("../../db");
const jwt = require("jsonwebtoken");

const updateTodoMiddleware = async (req, res, next) => {
    const todoId = req.query.id;
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(404).json({ Error: "Please try again" });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded.userId);
        const todo = await Todo.updateOne({
            userId: decoded.userId,
            _id: todoId,
        }, {$set: {
            completed: true
        }})
        console.log(todo);
        next();

    } catch(error) {
        console.log(error);
        return res.status(404).json({ message: "Please try again" });
    }

    
}

module.exports = updateTodoMiddleware;