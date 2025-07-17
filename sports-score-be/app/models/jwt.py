# pydantic model for jwt sub
from pydantic import BaseModel
class JWTSub(BaseModel):
    """Pydantic model for JWT subject."""
    sub: str