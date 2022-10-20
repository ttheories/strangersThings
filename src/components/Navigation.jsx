import { Link } from "react-router-dom";

function Navigation({ user, setToken }) {
  return (
    <div className="MenuBtns">
      <h2>Stranger's Things</h2>
      <span>Hello, {user.username}</span>
      <Link to="/Register"> Register_ </Link>
      <Link to="/loginUser"> Login_ </Link>
      <Link to="/"> All Posts_ </Link>
      <Link to="/CreatePost">Create Post</Link>
      {/* <Link to="/SearchDelete">Delete a Post</Link> */}
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
