import apiClient from "./apiClient";

export async function loginUser(credentials) {
  return await apiClient.post("/auth/login", credentials);
}

export async function registerUser(userData) {
  return await apiClient.post("/auth/register", userData);
}

export async function getCurrentUser() {
  return await apiClient.get("/auth/me");
}

export async function logoutUser() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
}