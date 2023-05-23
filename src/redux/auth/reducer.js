import { USER_LOGIN, USER_LOGOUT } from "./constants";

let initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { token: null, user: null, departementId: null, departement: null, id: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        user: action.user,
        departementId: action.departementId,
        departement: action.departement,
        id: action.id //id user
      };

    case USER_LOGOUT:
      return { token: null, user: null, departementId: null, departement: null };

    default:
      return state;
  }
}
