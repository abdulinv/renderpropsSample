import { store } from "../store";

export function protectedLoader() {
  const status = store.getState().users.isLoggedIn;
  if (!status) return null;
  return true;
}
