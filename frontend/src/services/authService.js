import api from "./api";

export const login = (credentials) =>
  api.post("/auth/login", credentials);

export const logout = () => api.post("/auth/logout");

export const getProfile = () => api.get("/auth/profile");

export const changePassword = (data) =>
  api.post("/auth/change-password", data);
