const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

class ApiClient {
  async request(endpoint, options = {}) {
    const token = localStorage.getItem("access_token");

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 15000);

    const isFormData = options.body instanceof FormData;

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        signal: controller.signal,

        headers: {
          ...(isFormData
            ? {}
            : {
                "Content-Type": "application/json",
              }),

          ...(token && {
            Authorization: `Bearer ${token}`,
          }),

          ...options.headers,
        },
      });

      clearTimeout(timeout);

      let data = null;

      const contentType = response.headers.get("content-type");

      if (
        contentType &&
        contentType.includes("application/json")
      ) {
        data = await response.json();
      }

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("user");
        }

        throw new Error(
          data?.message ||
            data?.error ||
            "Something went wrong."
        );
      }

      return data;
    } catch (error) {
      if (error.name === "AbortError") {
        throw new Error(
          "Request timed out. Please try again."
        );
      }

      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint);
  }

  post(endpoint, body) {
    return this.request(endpoint, {
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  }

  put(endpoint, body) {
    return this.request(endpoint, {
      method: "PUT",
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  }

  patch(endpoint, body) {
    return this.request(endpoint, {
      method: "PATCH",
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, {
      method: "DELETE",
    });
  }
}

export default new ApiClient();