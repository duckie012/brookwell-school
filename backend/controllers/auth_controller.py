from flask import jsonify, request


def register():
    data = request.get_json()

    return jsonify(
        {
            "success": True,
            "message": "Register endpoint reached.",
            "received": data,
        }
    )


def login():
    data = request.get_json()

    return jsonify(
        {
            "success": True,
            "message": "Login endpoint reached.",
            "received": data,
        }
    )