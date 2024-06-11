const zod = require('zod');
const { User } = require('../../db');
const bcrypt = require('bcryptjs');


const SignupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8),
    firstName: zod.string(),
    lastName: zod.string(),
})

const signinMiddleware = async (req, res, next) => {  
    const body = req.body;
    const parsedBody = SignupSchema.safeParse(body);
    if (!parsedBody.success) {
        return res.status(411).json({ Error: "Invalid Data" });
    }
    const userExist = await User.findOne({ username: body.username });

    if (userExist) {
        return res.status(501).json({ Error: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const { username, firstName, lastName } = body;
    const user = await User.create({
        username,
        password: hashedPassword,
        firstName,
        lastName
    })
    req.user_id = user._id;
    next();
}

module.exports = signinMiddleware;