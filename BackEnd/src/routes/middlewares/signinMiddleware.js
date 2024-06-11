const zod = require("zod");
const { User } = require("../../db");
const bcrypt = require('bcryptjs');

const singinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const signinMiddleware = async (req, res, next) => {
    const body = req.body;
    const parsedBody = singinSchema.safeParse(body);

    if(!parsedBody.success) {
        return res.status(411).json({ Error: "Please enter a valid credentials" });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await User.findOne({ username: body.username });
    if(!user) {
        return res.status(411).json({ Error: "Please enter a valid credentials" });
    } 

    const passwordCompare = await bcrypt.compare(body.password, user.password);

    if(passwordCompare) {
        req.user_id = user._id;
        next();
    } else {
        return res.status(411).json({ Error: "Invalid credentials" });
    }
}

module.exports = signinMiddleware;

// {
//     "username": "adityaudata@gmail.com",
//     "password": "123456789", 
//     "firstName": "Udata",
//     "lastName": "Aditya"
// }