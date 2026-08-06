import apiClient from "./apiClient";

export async function getAnnouncements() {
  return await apiClient.get("/announcements");
}

export async function getLatestAnnouncements() {
  return await apiClient.get("/announcements/latest");
}

export async function getAnnouncement(id) {
  return await apiClient.get(`/announcements/${id}`);
}

export async function createAnnouncement(data) {
  return await apiClient.post("/announcements", data);
}

export async function updateAnnouncement(id, data) {
  return await apiClient.put(`/announcements/${id}`, data);
}

export async function deleteAnnouncement(id) {
  return await apiClient.delete(`/announcements/${id}`);
}

export async function subscribeNewsletter(data) {
  return { success: true, message: "Subscribed successfully", data };
}