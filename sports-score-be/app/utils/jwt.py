from typing import Union
from datetime import datetime, timedelta

from dotenv import load_dotenv
from jose import jwt
import os
from pydantic import BaseModel


load_dotenv()

SECRET_KEY = os.getenv("JWT_SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = 60



# create a function to create a jwt token for user login
def create_login_token(user_id: str) -> str:
    """Create a JWT token for user login."""
    expiration: datetime = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    class TokenPayload(BaseModel):
        sub: str  # user_id
        exp: datetime
        email: str
        role: str

    # You need to pass email and role to this function now
    def create_login_token(user_id: str, email: str, role: str) -> str:
        """Create a JWT token for user login."""
        expiration: datetime = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        to_encode = TokenPayload(sub=user_id, exp=expiration, email=email, role=role).dict()
        return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


# create a function to decode a jwt token
def decode_jwt_token(token: str) -> Union[dict, None]:
    """Decode a JWT token."""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload # instead of payload lets have a specific pydantic model for the 
    except jwt.JWTError:
        return None