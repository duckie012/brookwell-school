import os
from datetime import timedelta

# Base project directory
BASE_DIR = os.path.abspath(os.path.dirname(__file__))


class Config:
    """
    Main configuration for Brookwell Harmony School Backend
    """

    # -------------------------
    # Security
    # -------------------------
    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "brookwell-harmony-super-secret-key"
    )

    JWT_SECRET_KEY = os.getenv(
        "JWT_SECRET_KEY",
        "brookwell-jwt-secret-key"
    )

    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=8)

    # -------------------------
    # Database
    # -------------------------
    SQLALCHEMY_DATABASE_URI = (
        f"sqlite:///{os.path.join(BASE_DIR, 'instance', 'brookwell.db')}"
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # -------------------------
    # Uploads
    # -------------------------
    UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")

    MAX_CONTENT_LENGTH = 16 * 1024 * 1024

    # -------------------------
    # Image Extensions
    # -------------------------
    ALLOWED_IMAGE_EXTENSIONS = {
        "png",
        "jpg",
        "jpeg",
        "gif",
        "webp",
    }

    # -------------------------
    # School Information
    # -------------------------
    SCHOOL_NAME = "Brookwell Harmony School"

    MOTTO = "Learning is Fun."

    VERSION = "0.4"

    DEVELOPER = "MK Digital Solutions"