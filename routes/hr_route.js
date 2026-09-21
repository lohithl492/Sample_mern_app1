let express=require("express");
let router=express.Router();
router.get("/viewemployees",(req,res)=>{
    res.send("view employees route");
})
router.post("/assign-task",(req,res)=>{
    res.send("assign task route");
})
router.get("/view-task",(req,res)=>{
    res.send("view task route");
})
router.delete("/deleteemployee/:id",async(req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id)
    if(result){
        res.send("employee deleted sucess");
    }else{
    res.send("delete empployee route");
    }
})
// localhost:3000/api/hr/assign-task =>POST
// localhost:3000/api/hr/viewtasks =>GET
module.exports=router;