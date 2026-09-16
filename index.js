let express= require('express');//import package
let app= express();   //create object of express
let hrroute=require('./routes/hr_route');//import route file


app.use('/api/hr', hrroute);


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})