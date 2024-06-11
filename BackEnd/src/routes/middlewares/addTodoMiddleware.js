const jwt = require("jsonwebtoken");
const zod = require("zod");
const { Todo } = require("../../db");
require('dotenv').config();

const todoSchema = zod.object({
    title: zod.string().min(3),
    description: zod.string().min(3)
})

const addTodoMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(404).json({ Error: "Please try again" });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const body = req.body;
        const parsedBody = todoSchema.safeParse(body);
        if(!parsedBody.success) {
            return res.status(404).json({ Error: "Please Enter valid data" });
        }
        const todo = await Todo.create({
            userId: decoded.userId,
            title: body.title,
            description: body.description,
            createdAt: new Date()
        })
        next();

    } catch(error) {
        return res.status(404).json({ message: "Please try again" });
    }


}

module.exports = addTodoMiddleware;