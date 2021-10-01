const mongoose=require('mongoose');

const mongoSchema=mongoose.Schema({
    name:String,
    email:String,
    phoneNumber:Number,
    comment:String 
});

module.exports=mongoose.model('Users',mongoSchema);