from functools import wraps
from flask import jsonify


def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        return jsonify({"message": "Auth middleware placeholder"}), 200

    return decorated
