const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((error)=>{
    console.error('ERROR connecting to mongoDb:',error)
})

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
// Enable CORS middleware

// start the server
const port = process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})