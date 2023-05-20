import { USER_LOGIN, USER_LOGOUT } from "./constants";

let initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { token: null, user: null, email: null, departement: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        user: action.user,
        email: action.email,
        departement: action.departement,
        id: action.id //ini 2 bukan. maksud gua implementasi pas di code nya
      };

    case USER_LOGOUT:
      return { token: null, user: null, email: null, departement: null };

    default:
      return state;
  }
}
