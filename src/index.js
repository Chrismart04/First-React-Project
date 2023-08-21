import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, Hello } from "./Greeting";
import {Saludar} from './Saludar';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting />
    <Hello />
    <Saludar/>
  </>
);
