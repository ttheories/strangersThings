import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <h2>Stranger's Things</h2>
      <Link to="/">HOME</Link>
      <Link to="/Register">Register</Link>
      <Link to="/">Login/Logout</Link>
      <Link to="/ ">Profile</Link>
      <Link to="/Posts">All Posts</Link>
    </div>
  );
}

export default Navigation;
