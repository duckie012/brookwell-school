from flask_jwt_extended import create_access_token
from models.user import User
from database.db import db


def register_user(data):
    """
    Register a new user.
    """

    required_fields = [
        "first_name",
        "last_name",
        "username",
        "email",
        "password",
    ]

    # Validate required fields
    for field in required_fields:
        if not data.get(field):
            return {
                "success": False,
                "message": f"{field} is required."
            }

    # Check username
    if User.query.filter_by(username=data["username"]).first():
        return {
            "success": False,
            "message": "Username already exists."
        }

    # Check email
    if User.query.filter_by(email=data["email"]).first():
        return {
            "success": False,
            "message": "Email already exists."
        }

    # Create user
    user = User(
        first_name=data["first_name"],
        last_name=data["last_name"],
        username=data["username"],
        email=data["email"],
    )

    # Hash password
    user.set_password(data["password"])

    # Save to database
    db.session.add(user)
    db.session.commit()

    return {
        "success": True,
        "message": "User registered successfully.",
        "user": user.to_dict()
    }


def login_user(data):
    """
    Authenticate a user and generate a JWT token.
    """

    email = data.get("email")
    password = data.get("password")

    # Validate input
    if not email or not password:
        return {
            "success": False,
            "message": "Email and password are required."
        }

    # Find user
    user = User.query.filter_by(email=email).first()

    if not user:
        return {
            "success": False,
            "message": "Invalid email or password."
        }

    # Verify password
    if not user.check_password(password):
        return {
            "success": False,
            "message": "Invalid email or password."
        }

    # Generate JWT token
    access_token = create_access_token(
        identity=str(user.id),
        additional_claims={
            "username": user.username,
            "role": user.role
        }
    )

    return {
        "success": True,
        "message": "Login successful.",
        "access_token": access_token,
        "user": user.to_dict()
    }