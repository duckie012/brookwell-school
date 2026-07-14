from flask import jsonify, request
from flask_jwt_extended import jwt_required

from services.announcement_service import (
    create_announcement,
    get_announcements,
)


def get_all_announcements():
    announcements = get_announcements()
    return jsonify(announcements)


@jwt_required()
def add_announcement():
    data = request.get_json()

    result = create_announcement(data)

    if result["success"]:
        return jsonify(result), 201

    return jsonify(result), 400