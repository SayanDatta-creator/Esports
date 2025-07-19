from contextlib import asynccontextmanager
from routes import auth

import uvicorn
from fastapi import FastAPI
from db import db



@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        await db.command("ping")
        print("✅ MongoDB connected")
    except Exception as e:
        print(f"❌ MongoDB connection failed: {e}")
        import sys
        sys.exit(1)

    yield  # startup done, app runs now

    # (Optional) Cleanup logic
    print("🔻 App shutting down...")

app = FastAPI()
app.include_router(auth.router)


if __name__ == "__main__":
    print("Starting FastAPI server...")
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)