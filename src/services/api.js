export const API_URL = "https://innovacioncomercialx-backend-clean.onrender.com/api";

export async function api(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  return res.json();
}
