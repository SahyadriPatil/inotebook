const mongoose = require('mongoose');
// //const mongoURI = "mongodb://localhost:27017/?authMechanism=DEFAULT"
const mongoURI = "mongodb://0.0.0.0:27017/inotebook?"
// const mongoURI ="mongodb://localhost:27017"
const connectToMongo= ()=>{
    mongoose.connect(mongoURI,(err)=>{
        if(!err)console.log("connected to mongo successfully");
        else console.log(err);
    })
}

//  const NewSchema = new mongoose.Schema({
//     name:String,
//     age:Number
//  });
//  const newModel = new mongoose.model("book",NewSchema);

//  const data = newModel({name:"Sai",age:21})
//  data.save();

module.exports = connectToMongo;