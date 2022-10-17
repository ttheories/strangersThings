import { useState } from "react";
import "./App.jsx";

function App() {
  const [userName, setUsername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(userName, password);
      }}
    ></form>
  );
}
