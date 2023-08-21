import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, Hello } from "./Greeting";
import { Saludar } from "./Saludar";
import {Posts} from "./Posts";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Posts/>
  </>
);
