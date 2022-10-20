import { useState, useEffect } from "react";
import { registerUser } from "../api/auth";
import { useParams, useNavigate } from "react-router-dom";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          setError("");

          const result = await registerUser(username, password);

          if (result.success) {
            const token = result.data.token;
            localStorage.setItem("token", token);
            setToken(token);
            setPassword("");
            setUsername("");
            navigate("/");
          } else {
            setError(result.error.message);
          }
        }}
      >
        {" "}
        {error && <h5>(error)</h5>}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button type="submit">"Register"</button>
      </form>
    </div>
  );
}
