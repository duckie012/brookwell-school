from flask import Blueprint

bp = Blueprint('contact_routes', __name__)

@bp.route('/contact/health', methods=['GET'])
def contact_health():
    return {"status": "ok"}
