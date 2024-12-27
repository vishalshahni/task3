const express = require('express');
const route = express.Router();




route.get('/',(req,res,next)=>{
    res.send('This is an express js framework');
})

module.exports = route;