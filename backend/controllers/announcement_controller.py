from flask import jsonify
from models.announcement import Announcement


def get_all_announcements():
    announcements = Announcement.query.all()

    return jsonify([
        {
            "id": a.id,
            "title": a.title,
            "content": a.content,
            "important": a.important,
        }
        for a in announcements
    ])