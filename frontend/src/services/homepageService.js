import api from "./api";

export const getHomepageContent = () => api.get("/homepage");

export const updateHomepageContent = (data) =>
  api.put("/homepage", data);
