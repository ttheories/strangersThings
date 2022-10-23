import { Link } from "react-router-dom";

function Navigation({ user, setToken }) {
  return (
    <nav className="NavBar">
      <Link to="/" className="site-title">
        Stranger's Things
      </Link>
      <ul>
        <li>
          <span>Hello, {user.username}</span>
        </li>
        <li>
          <Link to="/Register"> Register </Link>
        </li>
        <li>
          <Link to="/loginUser"> Login </Link>
        </li>
        <li>
          <Link to="/"> All Posts </Link>
        </li>
        <li>
          <Link to="/CreatePost">Create Post</Link>
        </li>
        <li></li>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            setToken("");
          }}
        >
          Log Out
        </button>
      </ul>
    </nav>
  );
}

export default Navigation;
