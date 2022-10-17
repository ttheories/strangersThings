import { useState } from "react";
import "./App.jsx";

function App() {
  const [userName, setUsername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <form
    onSubmit={async (event) => {
      event.preventDefault();
      console.log({ userName, password });
      // hit the register api route
      const result = await registerUser(userName, password);
      console.log(result);
      const token = result.data.token;
      localStorage.setItem("token", token);
      setToken(token);
    }}

    ></form>
  );
}
