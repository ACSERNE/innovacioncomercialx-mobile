import { api } from "./api";
import { getToken } from "./token";

export async function getUserProfile() {
  const token = await getToken();
  return api("/user/profile", {
    headers: { Authorization: `Bearer ${token}` }
  });
}
