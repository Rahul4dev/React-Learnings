import React from 'react';
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App"; // app component coming from App.js

// this is our reactDom render instruction which is the main instruction for other components. So it is a trunk component of all other branch components
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
