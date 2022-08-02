import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  {/* <Router basename="/getweb-react">
  <Router> */}
    <App />
  {/* </Router> */}
  </React.StrictMode>
);
