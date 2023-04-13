import {
  ERROR_FETCHING_PROFILE,
  SET_KEYWORD,
  START_FETCHING_PROFILE,
  SUCCESS_FETCHING_PROFILE,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  keyword: "",
  talent: "",
  category: "",
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_PROFILE:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_PROFILE:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_PROFILE:
      return {
        ...state,
        status: statuslist.success,
        data: action.events,
      };

    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };

    default:
      return state;
  }
}
