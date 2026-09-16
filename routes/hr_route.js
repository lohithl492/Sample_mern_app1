let express = require('express');
let router=express.Router();

router.get("/viewemployees", (req, res) => {
    res.send("view employees route");
})

router.post("/assign-task", (req, res) => {
    res.send("assign task route");
})

router.get("/view-tasks", (req, res) => {
    res.send("view tasks route");
})

router.delete("/delete-task", (req, res) => {
    res.send("delete task route");
})

module.exports=router;