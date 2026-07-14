from flask import Blueprint

from controllers.announcement_controller import (
    get_all_announcements,
)

announcement_bp = Blueprint(
    "announcement",
    __name__,
)

announcement_bp.route(
    "/api/announcements",
    methods=["GET"],
)(
    get_all_announcements
)