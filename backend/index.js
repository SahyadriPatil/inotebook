const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express()
const port = 5000


app.use(cors())

app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
 app.use('/api/nodes',require('./routes/nodes'))

app.get('/', (req, res) => {
  res.send('Hello sahyadri!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// const express = require('express');
// const app = express();

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017",(err)=>{
//   if(!err) console.log("db connected");
//   else console.log("db error");
// })
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })







