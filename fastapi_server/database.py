from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()
client=MongoClient(os.getenv("MONGO_URL"))
#create a database in mongodb
db=client["vigan"]
#create a collections in vigan database in mongodb
student_collection=db["student"]
staff_collection=db["staff"]