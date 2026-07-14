from flask import Blueprint

bp = Blueprint('gallery_routes', __name__)

@bp.route('/gallery/health', methods=['GET'])
def gallery_health():
    return {"status": "ok"}
