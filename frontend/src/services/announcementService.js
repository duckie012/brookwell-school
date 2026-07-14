import api from "./api";

export const getAnnouncements = () =>
  api.get("/announcements");