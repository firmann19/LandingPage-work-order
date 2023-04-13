import debounce from "debounce-promise";
import { getData } from "../../utils/fetch";
import {
  ERROR_FETCHING_PROFILE,
  SET_KEYWORD,
  SUCCESS_FETCHING_PROFILE,
} from "./constants";
import { clearNotif } from "../notif/actions";

let debouncedFetchProfile = debounce(getData);

export const startFetchingProfile = ({ profile }) => {
  return {
    type: SUCCESS_FETCHING_PROFILE,
    profile,
  };
};

export const successFetchingProfile = ({ profile }) => {
  return {
    type: SUCCESS_FETCHING_PROFILE,
    profile,
  };
};

export const errorFetchingProfile = () => {
  return {
    type: ERROR_FETCHING_PROFILE,
  };
};

export const fetchProfile = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingProfile());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 7000);

      let res = await debouncedFetchProfile("/profile-setting");

      dispatch(
        successFetchingProfile({
          profiles: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingProfile);
    }
  };
};

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  };
};
