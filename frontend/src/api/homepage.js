import apiClient from "./apiClient";

export async function getHomepageData() {
  return await apiClient.get("/homepage");
}

export async function updateHomepage(data) {
  return await apiClient.put("/homepage", data);
}

export async function updateHeroSection(data) {
  return await apiClient.put("/homepage/hero", data);
}

export async function updateStatistics(data) {
  return await apiClient.put("/homepage/statistics", data);
}