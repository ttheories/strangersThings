import { Navigate } from "react-router";
import { deletePost } from "../api/posts";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function SinglePost({ post }) {
  const { token } = useAuth();
  const navigate = useNavigate();
  const id = post._id;
  console.log("token", token);
  console.log(post._id);
  const handleDelete = async () => {
    console.log("clicked delete");
    await deletePost(token, post._id);
    navigate("/");
    console.log("after navigate");
  };
  return (
    <div>
      <h4>{post.title}</h4>
      <h4>{post.description}</h4>
      <h4>{post.price}</h4>
      <h4>{post.willDeliver}</h4>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}
