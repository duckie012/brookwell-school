import apiClient from "./apiClient";

export async function getGalleryImages() {
  return await apiClient.get("/gallery");
}

export async function getGalleryImage(id) {
  return await apiClient.get(`/gallery/${id}`);
}

export async function getGalleryHighlights() {
  return [
    {
      id: 1,
      title: "Creative Learning",
      description: "Students explore hands-on projects and imaginative activities every day.",
      icon: "BookOpen",
    },
    {
      id: 2,
      title: "Sports & Wellness",
      description: "Physical activities build confidence, teamwork, and healthy habits.",
      icon: "Trophy",
    },
    {
      id: 3,
      title: "Nature & Environment",
      description: "Outdoor learning encourages care for the world around us.",
      icon: "Trees",
    },
  ];
}

export async function getGalleryCategories() {
  return ["Academics", "Sports", "Culture", "Events"];
}

export async function getGalleryCTA() {
  return {
    title: "Explore School Life",
    description: "Browse highlights from learning, sports, and community activities.",
  };
}

export async function uploadGalleryImage(formData) {
  return await apiClient.post("/gallery", formData);
}

export async function updateGalleryImage(id, formData) {
  return await apiClient.put(`/gallery/${id}`, formData);
}

export async function deleteGalleryImage(id) {
  return await apiClient.delete(`/gallery/${id}`);
}