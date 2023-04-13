import debounce from "debounce-promise";
import { getData } from "../../utils/fetch";
import {
  ERROR_FETCHING_ORDERS,
  SET_KEYWORD,
  SET_USERID,
  START_FETCHING_ORDERS,
  SUCCESS_FETCHING_ORDERS,
} from "./constants";
import { clearNotif } from "../notif/actions";

let debouncedFetchOrder = debounce(getData, 1000);

export const startFetchingOrders = () => {
  return {
    type: START_FETCHING_ORDERS,
  };
};

export const SuccessFetchingOrders = ({ orders }) => {
  return {
    type: SUCCESS_FETCHING_ORDERS,
  };
};

export const errorFetchingOrders = () => {
  return {
    type: ERROR_FETCHING_ORDERS,
  };
};

export const fetchOrders = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingOrders());
    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 7000);

      let params = {
        keyword: getState().orders.keyword,
        email: getState().orders?.email?.value || "",
      };

      let res = await debouncedFetchOrder("/checkout", params);

      res.data.data.forEach((res) => {
        res.email = res?.orders?.email ?? "";
      });

      dispatch(SuccessFetchingOrders({ orders: res.data.data }));
    } catch (error) {
      dispatch(errorFetchingOrders());
    }
  };
};

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  };
};

export const setUserID = (userID) => {
  return {
    type: SET_USERID,
    userID,
  };
};
