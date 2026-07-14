from flask import jsonify, request

from services.auth_service import (
    register_user,
    login_user,
)


def register():
    data = request.get_json()

    result = register_user(data)

    if result["success"]:
        return jsonify(result), 201

    return jsonify(result), 400


def login():
    data = request.get_json()

    result = login_user(data)

    if result["success"]:
        return jsonify(result), 200

    return jsonify(result), 401