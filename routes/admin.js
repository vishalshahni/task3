const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action = "/admin/add-product" method="POST"><lable>Add products</label><input type="text" name="title" ><input type="text" name="qunatity"><button type="submit">Add</button></form>')
})

router.post('/add-product',(req,res,next)=>{
    const normalObject = Object.assign({}, req.body)
    console.log(normalObject);
    res.redirect('/');
})


module.exports = router;