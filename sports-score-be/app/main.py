from routes import auth

import uvicorn
from fastapi import FastAPI



app = FastAPI()
app.include_router(auth.router)


if __name__ == "__main__":
    print("Starting FastAPI server...")
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)