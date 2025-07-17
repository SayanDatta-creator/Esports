from fastapi import APIRouter
from services.auth_service import login_user, signup_user
from models.user import LoginResponse, UserLogin, UserSignup, SignupResponse

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/signup", response_model=SignupResponse)
async def signup(user: UserSignup):
    return await signup_user(user)

@router.post("/login", response_model=LoginResponse)
async def login(user: UserLogin):
    return await login_user(user)