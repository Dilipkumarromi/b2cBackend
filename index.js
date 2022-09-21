const express=require('express');
const app = express();
const cors = require('cors');
const compression=require('compression')

const morgan = require("morgan")
const dbConnection=require('./Config/dbConnection')
const Router=require('./Routers/Router')
const bodyParser=require("body-parser");

require('dotenv').config()

app.use(compression({
    level:6,
    threshold:10*1000,
    filter:(req,res)=>{
        if(req.headers['x-no-compression']){
            return false
        }
        return compression.filter(req,res)
    }
}))

const PORT=process.env.SERVER_PORT
app.listen(PORT,()=>{
    console.log(`Server runing http://localhost:${PORT}`);
})