import { Link } from "react-router-dom";

function Navigation({ user }) {
  return (
    <div>
      <h2>Stranger's Things</h2>
      <span>Hello, {user.username}</span>
      <Link to="/">HOME</Link>
      <Link to="/Register">Register</Link>
      <Link to="/">Login</Link>
      <Link to="/ ">Profile</Link>
      <Link to="/Posts">All Posts</Link>
    </div>
  );
}

export default Navigation;
