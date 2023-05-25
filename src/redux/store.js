import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import listsReducer from "./lists/reducer";
import notifReducer from "./notif/reducer";
import checkoutReducer from "./checkouts/reducer"

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  lists: listsReducer,
  notif: notifReducer,
  checkouts: checkoutReducer
});
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
