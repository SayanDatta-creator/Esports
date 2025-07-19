from dotenv import load_dotenv
import os
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase


load_dotenv()

DB_USERNAME: str = os.getenv("DB_USERNAME", "")
DB_PASSWORD: str = os.getenv("DB_PASSWORD", "")
MONGO_URI: str = os.getenv("MONGO_URI", "")
MONGO_DB_NAME: str = os.getenv("DB_NAME", "")

if not MONGO_URI or not MONGO_DB_NAME:
    raise ValueError("MONGO_URI and MONGO_DB_NAME must be set in the environment variables.")

client: AsyncIOMotorClient = AsyncIOMotorClient(MONGO_URI)
db: AsyncIOMotorDatabase = client[MONGO_DB_NAME]