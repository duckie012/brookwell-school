from database.db import db
from models.announcement import Announcement


def create_announcement(data):

    if not data.get("title"):
        return {
            "success": False,
            "message": "Title is required."
        }

    if not data.get("content"):
        return {
            "success": False,
            "message": "Content is required."
        }

    announcement = Announcement(
        title=data["title"],
        content=data["content"],
        important=data.get("important", False),
        published=data.get("published", True)
    )

    db.session.add(announcement)
    db.session.commit()

    return {
        "success": True,
        "message": "Announcement created successfully.",
        "announcement": announcement.to_dict()
    }


def get_announcements():

    announcements = Announcement.query.order_by(
        Announcement.created_at.desc()
    ).all()

    return [
        announcement.to_dict()
        for announcement in announcements
    ]