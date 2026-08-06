import apiClient from "./apiClient";

export async function submitContactForm(data) {
  return await apiClient.post("/contact", data);
}

export async function getMessages() {
  return await apiClient.get("/contact");
}

export async function getMessage(id) {
  return await apiClient.get(`/contact/${id}`);
}

export async function updateMessage(id, data) {
  return await apiClient.put(`/contact/${id}`, data);
}

export async function deleteMessage(id) {
  return await apiClient.delete(`/contact/${id}`);
}