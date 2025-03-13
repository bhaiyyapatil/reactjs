import { createRoot } from "react-dom/client";
//import { jsx as _jsx } from "react/jsx-runtime.js";
import App from "./App.jsx";
import React from "react";

/* const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
 */
const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Google link
  </a>
);

const anotherUser = "This is another User";

const reactElement = React.createElement(
  "a",
  { href: "https://www.esds.co.in", target: "_blank" },
  "Click me to visit ESDS",
  anotherUser
);

createRoot(document.getElementById("root")).render(
  //<App />
  reactElement
);
