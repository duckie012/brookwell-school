from flask import Blueprint, jsonify

main_bp = Blueprint("main", __name__)


@main_bp.route("/")
def home():
    return jsonify(
        {
            "project": "Brookwell Harmony School",
            "status": "Running",
            "developer": "MK Digital Solutions",
        }
    )


@main_bp.route("/api/health")
def health():
    return jsonify(
        {
            "status": "healthy"
        }
    )