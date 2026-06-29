import AsyncStorage from "@react-native-async-storage/async-storage";

export async function save(key, value) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function load(key) {
  const v = await AsyncStorage.getItem(key);
  return v ? JSON.parse(v) : null;
}

export async function remove(key) {
  await AsyncStorage.removeItem(key);
}
