from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    name:str
    email:str
    age:int
    marks:float

app=FastAPI()

@app.get("/getStudents")
def get_students():
    return "get students api called";

@app.post("/register")
def register(stu:Student):
    return "student registered successfully";

@app.put("/updateprofile")
def updateprofile(stu:Student):
    return "update profile called";

@app.delete("/deleteprofile")
def deleteprofile():
    return "delete profile called";

@app.get("/getStudentDetails/{userid}")
def getStudentDetails(userid:int):
    return {"user_id":userid}


@app.get("/getstudentsdetails")
def getstudentsdetails(page:int=1,limit:int=10):
    return {"page":page,"limit":limit}