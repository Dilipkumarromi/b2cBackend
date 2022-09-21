const express=require('express');
const app = express();
const dbConnection=require('./Config/dbConnection')
require('dotenv').config()



app.listen(80,()=>{
    console.log('listening on port 80');
})