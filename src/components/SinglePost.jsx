import { deletePost } from "../api/posts";
import useAuth from "../hooks/useAuth";

export default function SinglePost({ post }) {
  const { token } = useAuth();
  const id = post._id;
  console.log("token", token);
  return (
    <div>
      <h4>{post.title}</h4>
      <h4>{post.description}</h4>
      <h4>{post.price}</h4>
      <h4>{post.willDeliver}</h4>
      <button
        onClick={async () => {
          <deletePost />;

          // call deletePost and pass it token and id from 5-6
          // refresh the page to see if the post was deleted
          // filter through all of your posts, remove the post with the idea you just delted
        }}
      >
        Delete Post
      </button>
    </div>
  );
}
