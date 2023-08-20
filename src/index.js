import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const user = {
    firstName: "Pedro",
    lastName: "Juarez"
  }
  return <div>
    <h1>{user.firstName}</h1>
    <h2>{user.lastName}</h2>

  </div>
}
root.render(<Greeting />);
