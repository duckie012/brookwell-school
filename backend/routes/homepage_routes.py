from flask import Blueprint

bp = Blueprint('homepage_routes', __name__)

@bp.route('/homepage/health', methods=['GET'])
def homepage_health():
    return {"status": "ok"}
