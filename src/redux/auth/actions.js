import {
  USER_LOGIN,
  USER_LOGOUT,
} from "./constants";

export function userLogin(token, user, email, departement) {
  return {
    type: USER_LOGIN,
    token,
    user,
    email,
    departement
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}

