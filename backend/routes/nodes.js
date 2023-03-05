const express = require('express');
const fetchuser = require('../middlewares/fetchuser');
const router = express.Router();
const Notes = require('../modules/Notes');
const { body, validationResult } = require('express-validator');

//Roter 1 Fetch all users
router.get('/fetchnodes',fetchuser,async(req,res)=> {
    try{
    const notes = await Notes.find({user:req.user.id})
    res.json(notes);
    }catch(error){
        console.log(error.message);
        return res.status(500).send("Some error occure");
    }   
})

//Roter 2 create notes post Req
router.post('/addnodes',fetchuser,[body('title','enter a valid title').isLength({min:3}),
body('description','enter a valid desciption').isLength({ min: 5 })],async(req,res)=> {
   try{
    const {title,description,tag}=req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const note = await Notes.create({
        title,description,tag,user:req.user.id
    })
    const savenote = await note.save();

    res.json(savenote);
}catch(error){
         console.log(error.message);
        return res.status(500).send("Some error occure");
}
})

//Route 3 updates notes

router.put('/updatenote/:id',fetchuser,async(req,res)=>{
    const{title,description,tag}=req.body;
    //create a new note object
    try{

    
    const newNote = {

    }
    if(title){newNote.title = title}
    if(description){newNote.description = description}
    if(tag){newNote.tag = tag}

    let note =  await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("User not find")}
    if(note.user.toString()!=req.user.id)
    {
        return res.status(404).send("User not Allowed")
    }
    note = await Notes.findByIdAndUpdate(req.params.id ,{$set:newNote} ,{new:true});
    res.json(note);
}
catch(error){
    console.log(error.message);
   return res.status(500).send("Some error occure");
}
})

//Routes 4 to delete a perticular notes

router.delete('/deletenotes/:id',fetchuser,async(req,res)=>{
    const{title,description,tag}=req.body;
try{
    let note = await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("User not find")}

    if(note.user.toString()!=req.user.id)
    {
        return res.status(404).send("User not Allowed");
    }

    note= await Notes.findByIdAndDelete(req.params.id);
    res.json({"Success ":" Note has been deleted",note:note});

}catch(error){
    console.log(error.message);
        return res.status(500).send("Some error occure");
}
})

module.exports = router;