import { save, load, remove } from "./storage";

const KEY = "auth_token";

export async function setToken(token) {
  await save(KEY, token);
}

export async function getToken() {
  return await load(KEY);
}

export async function clearToken() {
  await remove(KEY);
}
