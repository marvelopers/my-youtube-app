import { LocalStorageKey } from "src/constants/localStorage";

export class LocalStorage {
  static getValue(key: LocalStorageKey) {
    return localStorage.getItem(key);
  }

  static setValue(key: LocalStorageKey, value: string) {
    return localStorage.setItem(key, value);
  }

  static removeValue(key: LocalStorageKey) {
    return localStorage.removeItem(key);
  }
}
