import api from "./api";

export const getGalleryItems = () => api.get("/gallery");

export const uploadGalleryImage = (formData) =>
  api.post("/gallery", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteGalleryItem = (id) => api.delete(`/gallery/${id}`);
