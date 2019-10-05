import { $R } from "../../services/req-filter";

export function login(data) {
  return $R.post("/login", data);
}

export function logout() {
  return $R.post("/logout", {});
}

export interface RegisterForm {
  username: string;
  password: string;
}
export function register(formData: RegisterForm) {
  return $R.post("/register", formData);
}

export function getUsers() {
  return $R.get("/users");
}
