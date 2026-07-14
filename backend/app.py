from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from config import Config
from database.db import db
from models import *
from models.user import bcrypt

from routes.main_routes import main_bp
from routes.announcement_routes import announcement_bp
from routes.auth_routes import auth_bp


jwt = JWTManager()


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app)

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    app.register_blueprint(main_bp)
    app.register_blueprint(announcement_bp)
    app.register_blueprint(auth_bp)

    with app.app_context():
        db.create_all()

    return app


app = create_app()


if __name__ == "__main__":
    app.run(debug=True)