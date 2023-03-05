const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type: String,
        required :true
    },
    email:{
        type: String,
        required:true,
        unique :true
    },
    password:{
        type:String,
        required:true,
        //unique:true
    },
    date:
    {
        type:Date,
        required:Date.now
    }
});
const User = new mongoose.model('user',userSchema);
//User.createIndexes();//for unique emailid
module.exports= User;