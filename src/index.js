import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import "./styles/utilities.css";
import "./styles/transactions.css";
import "./styles/pagesstyle/approval.css"
import "./styles/transactions-detail.css";
import "./styles/componentstyle/sidebar.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Notif from "./components/Notif"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);
