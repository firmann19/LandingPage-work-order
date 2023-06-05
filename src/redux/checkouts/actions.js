import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";
import {
  ERROR_FETCHING_CHECKOUTS,
  SET_PAGE,
  START_FETCHING_CHECKOUTS,
  SUCCESS_FETCHING_CHECKOUTS,
} from "./constants";

let debouncedFetchCheckouts = debounce(getData, 1000);

export const startFetchingCheckouts = () => {
  return {
    type: START_FETCHING_CHECKOUTS,
  };
};

export const successFetchingCheckouts = ({ checkouts }) => {
  return {
    type: SUCCESS_FETCHING_CHECKOUTS,
    checkouts,
  };
};

export const errorFetchingCheckouts = () => {
  return {
    type: ERROR_FETCHING_CHECKOUTS,
  };
};

export const fetchCheckouts = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingCheckouts());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let params = {
        page: getState().checkouts?.page || 0,
        size: getState().checkouts?.size || 10,
      };

      let res = await debouncedFetchCheckouts("/checkout", params);
      console.log("Test", res);

      const _temp = [];
      console.log("array", _temp);

      res.data.data.checkouts.forEach((res) => {
        _temp.push({
          namaBarang: res.data.data.checkouts,
          kodeBarang: res.data.data.checkouts,
          permasalahan: res.data.data.checkouts,
          tindakan: res.data.data.checkouts,
          gantiSparepart: res.data.data.checkouts,
          UserRequestId: res.data.data.checkouts,
          DepartUserId: res.data.data.checkouts,
          UserApproveId: res.data.data.checkouts,
        });
      });

      dispatch(
        successFetchingCheckouts({
          checkouts: _temp,
          pages: res.data.data.pages,
        })
      );
    } catch (error) {
      dispatch(errorFetchingCheckouts());
    }
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};
