import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import AllPosts from "./components/AllPosts";
import LoginUser from "./components/loginUser";
import CreatePost from "./components/CreatePost";
//import DeletePost from "./components/SearchDelete";

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
    } else {
      setUser({ username: "Guest" });
    }
  }, [token]);

  return (
    <div className="App">
      <Navigation user={user} setToken={setToken} />
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/Register" element={<Register setToken={setToken} />} />
        <Route path="/loginUser" element={<LoginUser setToken={setToken} />} />
        <Route
          path="/createPost"
          element={<CreatePost setToken={setToken} />}
        />
        <Route path="/posts/:postId" element={<AllPosts />} />
        {/* <Route path="/SearchDelete" element={<DeletePost />} /> */}
      </Routes>
      <h4>{user?.username}</h4>
    </div>
  );
}

export default App;
