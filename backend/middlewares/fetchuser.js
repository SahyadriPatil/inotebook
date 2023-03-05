
const jwt = require('jsonwebtoken');
const jwt_secret = "sahyadripatil";

const fetchuser=(req,res,next)=>{
const token = req.header('auth-token');
if(!token)
{
    console.log(error)
    return res.send("error");//res.status(401).send({error:"please authenticate using a valod user"})
}
try{
const data = jwt.verify(token,jwt_secret);
req.user = data.user;
next(); 
}catch(error)
{
    return res.send("error");//res.send({error:"please authenticate using a valod user"})
}
}
module.exports = fetchuser;