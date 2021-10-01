const express = require('express');
const app = express();
const mongoose=require('mongoose');
const cors=require('cors');

const Users=require('./model');

app.use(cors())
app.use(express.json())

app.post('/',(req,res)=>{
    let data=new Users({
    name:req.body.name,
    email:req.body.email,
    phoneNumber:req.body.phoneNumber,
    comment:req.body.comment    
    });
    data.save().then((dbData)=>{
        res.json(dbData);
    }).catch((err)=>{
        res.json({
            err:err
        })
    });
    });

mongoose.connect('mongodb://localhost:27017/vision');

let PORT=process.env.PORT || 3000;
app.listen(PORT);
