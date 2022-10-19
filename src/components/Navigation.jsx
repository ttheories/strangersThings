import { Link } from "react-router-dom";

function Navigation({ user, setToken }) {
  return (
    <div className="MenuBtns">
      <h2>Stranger's Things</h2>
      <span>Hello, {user.username}</span>
      {/* <Link to="/"> HOME_ </Link> */}

      <Link to="/Register"> Register_ </Link>
      <Link to="/loginUser"> Login_ </Link>
      {/* <Link to="/ "> Profile_ </Link> */}

      <Link to="/AllPosts"> All Posts_ </Link>
      <Link to="/CreatePost">Create Post</Link>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          setToken("");
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Navigation;
