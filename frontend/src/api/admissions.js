import apiClient from "./apiClient";

export async function submitAdmission(data) {
  return await apiClient.post("/admissions", data);
}

export async function getAdmissions() {
  return await apiClient.get("/admissions");
}

export async function getAdmission(id) {
  return await apiClient.get(`/admissions/${id}`);
}

export async function updateAdmission(id, data) {
  return await apiClient.put(`/admissions/${id}`, data);
}

export async function deleteAdmission(id) {
  return await apiClient.delete(`/admissions/${id}`);
}

export async function getAdmissionRequirements() {
  return await apiClient.get("/admissions/requirements");
}

export async function getFeeStructure() {
  return await apiClient.get("/admissions/fees");
}

export async function getAdmissionProcess() {
  return [
    { title: "Inquiry", description: "Submit your application and basic details." },
    { title: "Assessment", description: "We review the application and contact you." },
    { title: "Enrollment", description: "Complete the final steps and join the school." },
  ];
}

export async function getAdmissionsHero() {
  return {
    title: "Admissions Open",
    description: "Welcome to a caring, high-quality learning environment for every child.",
    image: null,
  };
}

export async function submitAdmissionEnquiry(data) {
  return { success: true, message: "Thank you for your enquiry", data };
}