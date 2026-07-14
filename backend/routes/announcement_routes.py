from flask import Blueprint

from controllers.announcement_controller import (
    get_all_announcements,
    add_announcement,
)

announcement_bp = Blueprint(
    "announcement",
    __name__,
    url_prefix="/api/announcements",
)

announcement_bp.route(
    "/",
    methods=["GET"],
)(get_all_announcements)

announcement_bp.route(
    "/",
    methods=["POST"],
)(add_announcement)