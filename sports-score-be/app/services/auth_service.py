from typing import Dict
from models.user import LoginResponse, SignupResponse, UserInDB, UserLogin, UserSignup
from repositories.user_repo import create_user, find_user_by
from passlib.context import CryptContext
from fastapi import HTTPException

from utils.jwt import create_login_token


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

async def signup_user(user: UserSignup) -> SignupResponse:
    existing_user = await find_user_by({"email": user.email}, UserInDB)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = pwd_context.hash(user.password)
    user_doc = {
        "email": user.email,
        "hashed_password": hashed_password,
        "role": user.role,
    }

    await create_user(user_doc)
    return SignupResponse(message="User created successfully")


async def login_user(user: UserLogin) -> LoginResponse:
    """Login a user and return a JWT token."""
    existing_user: UserInDB = await find_user_by({"email": user.email}, UserInDB)

    print(f"existing_user: {existing_user}")

    if not existing_user:
        raise HTTPException(status_code=400, detail="Invalid email or password")

    if not pwd_context.verify(user.password, existing_user.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid email or password")

    token = create_login_token(existing_user.id)
    return LoginResponse(access_token=token)