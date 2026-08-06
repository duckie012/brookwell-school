import apiClient from "./apiClient";

export async function getSchoolSettings() {
  return await apiClient.get("/settings");
}

export async function updateSchoolSettings(data) {
  return await apiClient.put("/settings", data);
}

export async function uploadSchoolLogo(formData) {
  return await apiClient.post("/settings/logo", formData);
}

export async function updateSchoolTheme(data) {
  return await apiClient.put("/settings/theme", data);
}