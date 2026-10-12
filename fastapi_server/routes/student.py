from fastapi import APIRouter
from models import Student
from database import students_collection
from bson import ObjectId
def student_details(Student):
    return{
        "id":str(Student["_id"]),
        "name":Student["name"],
        "email":Student["email"],
        "age":Student["age"],
        "mark":Student["mark"]
    }
student_router=APIRouter(prefix="/student",tags=["student"])
#localhost:8000/staff/getStudents
@student_router.get("/getStudents")
def getStudents():
    students=students_collection.find()
    return [student_details(student) for student in students]
#localhost:8000/staff/addStudents
@student_router.post("/register")
def register(stu:Student):
    result=students_collection.insert_one(stu.model_dump())
    return {"message":"data inserted sucess"}

@student_router.get("/getParticularstudent/{stuid}")
def getParticularstudent(stuid:str):
    student=students_collection.find_one({"_id":ObjectId(stuid)})
    return student_details(student)

@student_router.delete("/deletestudent/{stuid}")
def deletestudent(stuid:str):
    student=students_collection.delete_one({"_id":ObjectId(stuid)})
    return "student deleted sucess"

@student_router.put("/updatestudent/{stuid}")
def updatestudent(stuid: str, stu: Student):
    result = students_collection.update_one(
        {"_id": ObjectId(stuid)},
        {"$set": stu.model_dump()}
    )

    return "student updated successfully"