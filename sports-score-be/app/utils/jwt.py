from typing import Union
from datetime import datetime, timedelta, timezone

from dotenv import load_dotenv
from jose import JWTError, jwt
import os



load_dotenv()

SECRET_KEY: str = os.getenv("JWT_SECRET_KEY", "")
ALGORITHM: str = os.getenv("ALGORITHM", "")
ACCESS_TOKEN_EXPIRE_MINUTES: int = 60



# create a function to create a jwt token for user login
def create_login_token(user_id: str) -> str:
    """Create a JWT token for user login."""
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES) # type: ignore
    to_encode:dict = {"exp": expire, "sub": user_id} # type: ignore
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM) # type: ignore
    return encoded_jwt


# create a function to decode a jwt token
def decode_jwt_token(token: str) -> Union[dict, None]: # type: ignore
    """Decode a JWT token."""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload # instead of payload lets have a specific pydantic model for the 
    except JWTError:
        return None