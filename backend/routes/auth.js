
const express = require('express');
const newModel = require('../modules/User');
const User = require('../modules/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middlewares/fetchuser');

const jwt_secret = "sahyadripatil";


router.post('/createuser',[body('name','enter a valid name').isLength({min:3}),
body("email",'enter a valid email').isEmail(),
body('password','enter a valid password').isLength({ min: 5 })],async(req,res)=>{
    //const data = newModel({name:"isha",email:"ss222",password:"w222ex"})
    //console.log(req.body)
//     const user = User(req.body);//equal to create user below
//    user.save();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
let user = await User.findOne({email:req.body.email})
if(user){
    return res.status(404).json({error:"User with this email is already exist"})
}
const salt = await bcrypt.genSalt(10);
const secpass = await bcrypt.hash(req.body.password,salt);
    user = await User.create({
        name: req.body.name,
        email:req.body.email,
        password: secpass,
        date :req.body.date
      })
    //   .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error:"do no enter duplicate value"})})
   // res.send(req.body);
    // console.log(req.body);
   //res.send("done");
   const data ={
    user:{
        id:user.id
    } 
   }
      const jwtdata = jwt.sign(data,jwt_secret);
      res.json(jwtdata);
      console.log(jwtdata)
     // res.json(jwtdata);
    }catch(error)
    {
        console.log(error.message);
        return res.status(500).send("Some error occure");
    }
})
//to chech user authentication and login
router.post('/login',[body("email",'enter a valid email').isEmail(),body('password','canot be blank').exists()],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({error:"sorry user is not exist"})
        }
        const passwordcompare = await bcrypt.compare(password,user.password);
        if(!passwordcompare)
        {
            return res.status(400).json({error:"sorry user is not exist"}); 
        }

        const data ={
            user:{
                id : user.id
            }
        }
        const jwtdata = jwt.sign(data,jwt_secret);
      res.json(jwtdata);

    }catch(error){
        console.log(error.message);
        res.send(" error occure");
    }

})

//Route 3 get login user details
router.post('/getuser',fetchuser, async(req,res)=>{
try{
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user)
}catch(error)
{
    console.log(error.message);
        //res.send("Internal"); 
}
})
module.exports = router