import {
  USER_LOGIN,
  USER_LOGOUT,
} from "./constants";

export function userLogin(token, user, departementId, departement, id) {
  return {
    type: USER_LOGIN,
    token,
    user,
    departementId,
    departement,
    id
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}

