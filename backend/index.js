const express = require('express');
const internData = require('./internModel');
var bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config()
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const jsonParser = express.json();
app.use(jsonParser);
app.post('/add',cors(),(req,res)=>{
    console.log(req.body);
    var myData = new internData(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
    // res.send("helo");
})
app.get('/',(req,res)=>{
    internData.find({}).then((items)=>{res.json(items)}).catch((err)=>{console.log("error")})
})
app.listen(process.env.PORT||3001,()=>{
    console.log("Connected");
});