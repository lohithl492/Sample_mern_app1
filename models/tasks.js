const { Timestamp } = require('mongodb');
let mongoose=require('mongoose');

let taskschema=mongoose.Schema({
    taskname:{
        type:String,
        required:true
    },
    taskdescription:{
        type:String,
        required:true
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    assignedBy:{
          type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    duedate:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","In progress","Completed"],
        default:"Pending"
    }
},{
    timestamps:true
});
const tasks=mongoose.model('tasks',taskschema);
module.exports={tasks}