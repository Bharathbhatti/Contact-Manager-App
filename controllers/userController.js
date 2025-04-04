const asyncHandler=require('express-async-handler');
const User=require('../models/userModel');
const bcrypt=require('bcrypt');
const jwt=  require('jsonwebtoken');
//@desc Register a User
//@route POST /api/users/register
//@access Public
const registerUser=asyncHandler(async(req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    const userAvailable=await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error('User already exists');
    }
    //Hash Password
    const hashedPassword=await bcrypt.hash(password, 10);
    console.log('Hashed Password: ', hashedPassword);
    const user=await User.create({
        username,
        email,
        password:hashedPassword,
    });
    console.log('User Created: ', user);
    if (user) {
        res.status(201).json({
            _id:user.id,
            email:user.email,
        });
    } else {
        res.status(400);
        throw new Error('User data is not valid');
    }
    res.json({ message: 'Register the user' });
});

//@desc Login User
//@route POST /api/users/login
//@access Public
const loginUser=asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    const user=await User.findOne({ email });
    //compare password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        const acessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },
        },
    process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1m'});
        res.status(200).json({
            acessToken
        });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
});

//@desc Current User Info
//@route POST /api/users/current
//@access private
const currentUser=asyncHandler(async(req, res) => {
    res.json(req.user);
});

module.exports={
    registerUser,
    loginUser,
    currentUser
};