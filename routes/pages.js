const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('IndoWestern');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
});

router.get('/read more',(req,res)=>{
    res.render('read more');
});

module.exports = router;