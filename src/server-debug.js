const express = require('express');
const helmet = require('helmet');
const app = express();
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
const studentInfoRouter = require('./Routes/studentInfo');
const dotenv = require('dotenv');
dotenv.config();
main().then(res=>{
    console.log("mongoDb connected successfully:");
    app.use(helmet());
    app.use(jsonParser);
    app.use("/studentInfo",studentInfoRouter);
    app.listen(process.env.PORT,(err)=>{
        if(err){
            console.log(`error in listening on port ${process.env.PORT}:`,err);
        }
        console.log(`listening on port ${process.env.PORT}`);
    })
}).catch(err =>{
    console.log("connection faild with mongodb",err)
});

async function main() {
    console.log(process.env.MONGO_DB_PASS)
  return await mongoose.connect(`mongodb+srv://rahul:rahul@cluster0.weiibbf.mongodb.net/?retryWrites=true&w=majority`);
}


