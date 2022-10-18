import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import AllPosts from "./components/AllPosts";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({ username: "Guest" });

  useEffect(() => {
    async function getMe() {
      console.log("token before fetch");
      const result = await fetchMe(token);
      console.log(result);
      setUser(result.data);
    }
    if (token) {
      getMe();
    }
    console.log("in the useEffect");
  }, [token]);

  return (
    <div className="App">
      <Navigation user={user} />
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/Register" element={<Register setToken={setToken} />} />
      </Routes>
      <h4>{user?.username}</h4>
    </div>
  );
}

export default App;
