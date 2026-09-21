let express= require('express');//import package
let app= express();   //create object of express
let hrroutes=require('./routes/hr_route');
let emproutes=require('./routes/emp_route');
let mongoose=require('mongoose'); //import mongoose package

mongoose.connect("mongodb://127.0.0.1:27017/hrmanagement")
 .then(()=>{
    console.log("connect with mongodb database")
 }).catch((err)=>{
    console.log(err);
 })


app.use(express.json()); //middleware to convert json data into object

app.use("/api/hr",hrroutes);  //use the route
app.use("/api/emp",emproutes); //use the route

//run the server

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})