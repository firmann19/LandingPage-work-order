import {
  USER_LOGIN,
  USER_LOGOUT,
} from "./constants";

export function userLogin(token, user, email, departement, id) {
  return {
    type: USER_LOGIN,
    token,
    user,
    email,
    departement,
    id
  };
} //ini 1

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}

