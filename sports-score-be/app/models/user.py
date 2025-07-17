from enum import Enum
from typing import Any
from bson import ObjectId
from pydantic import BaseModel, EmailStr, Field, field_validator


class UserRole(str, Enum):
    """Enumeration for user roles."""
    USER = "user"
    ADMIN = "admin"
    VIEWER = "viewer"

class UserSignup(BaseModel):
    """User model for signup."""
    email: EmailStr
    password: str
    role: UserRole = Field(default=UserRole.USER)

class UserInDB(BaseModel):
    """User model for database representation. for internal use."""
    id: Any = Field(alias="_id")
    email: EmailStr
    hashed_password: str
    role: UserRole

    @field_validator('id', mode='before')
    @classmethod
    def convert_objectid_to_str(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v

class SignupResponse(BaseModel):
    """Response model for user signup."""
    message: str

class UserLogin(BaseModel):
    """User model for login."""
    email: EmailStr
    password: str

class LoginResponse(BaseModel):
    """Response model for user login."""
    access_token: str
    token_type: str = "bearer"