import { ERROR_FETCHING_ORDERS, SET_KEYWORD, SET_USERID, START_FETCHING_ORDERS, SUCCESS_FETCHING_ORDERS } from "./constants";

const statuslist = {
    idle: "idle",
    process: "process",
    success: "success",
    error: "error"
}

const initialState = {
    data: [],
    keyword: "",
    talent: "",
    category: "",
    status: statuslist.idle
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case START_FETCHING_ORDERS:
            return {...state, status: statuslist.process};
        
        case ERROR_FETCHING_ORDERS:
            return {...state, status: statuslist.error};
        
        case SUCCESS_FETCHING_ORDERS:
            return {
              ...state,
              status: statuslist.success,
              data: action.events
            }

        case SET_KEYWORD:
            return {
                ...state,
                keyword: action.keyword
            }

        case SET_USERID:
            return {
                ...state,
                userID: action.userID
            }
    
        default:
            return state;
    }
}