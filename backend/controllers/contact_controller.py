from flask import jsonify


def contact_home():
    return jsonify({"message": "Contact controller placeholder"}), 200
