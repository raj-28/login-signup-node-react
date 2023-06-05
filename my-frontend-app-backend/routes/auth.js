const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// User model (assuming you have a User model/schema)
const User = require('../models/User');

// Signup route
router.post('/signup',async(req,res)=>{
    const {email,password}=req.body;

    try{
        // check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'User Already exists'})
        } 

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =  awaitbcrypt.hash(password,salt);

        // Create a new User
        const newUser = new User({email,password:hashedPassword});
        await newUser.save();

        res.status(201).json({message:'User created successfully'});
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server Error'});
    }
});

// Login route
router.post('/login',async(req,res)=>{
    const {email,password}=req.body;

    try{
        // Check if user exists
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:'Invalid credentials'});
        }
        // validate Password
        const isPasswordValid =  await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:'Invalid credentials'});
        }
        // Create and send JWT token
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET);
        res.json({token});
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server error'});
    }
});
module.exports = router;