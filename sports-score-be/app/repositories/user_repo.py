from typing import Optional, Type, TypeVar

from pydantic import BaseModel
from db import db
from motor.motor_asyncio import AsyncIOMotorCollection


T = TypeVar("T", bound=BaseModel)

users_collection: AsyncIOMotorCollection = db["users"]

async def find_user_by(query: dict, model_cls: Type[T]) -> Optional[T]:
    """Find a user by a given query and return it as a given Pydantic model."""
    doc = await users_collection.find_one(query)
    return model_cls(**doc) if doc else None

async def create_user(doc: dict) -> str:
    """Create a new user in the database and return the user's ID."""
    result = await users_collection.insert_one(doc)
    return str(result.inserted_id)