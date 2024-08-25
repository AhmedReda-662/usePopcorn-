import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRateing={10}
      messages={["very-bad", "bad", "Good", "Very Good", "Excellent"]}
      defaultRating={5}
    /> */}
  </React.StrictMode>
);
