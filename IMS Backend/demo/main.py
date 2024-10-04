# main.py
from fastapi import FastAPI
from model.users import router

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Welcome to the API!"}

# Include CRUD routes from users module
app.include_router(router, prefix="/api")
