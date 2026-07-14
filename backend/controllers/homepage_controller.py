from flask import jsonify


def get_homepage_data():
    return jsonify({"message": "Homepage controller placeholder"}), 200
