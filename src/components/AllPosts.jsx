//  This component should render all posts
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      const result = await fetchPosts();
      console.log("The result is: ", result);
      setPosts(result.data.posts);
    }
    getAllPosts();
  }, []);



  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <h4>{post.title}</h4>
            <h4>{post.description}</h4>
            <h4>{post.price}</h4>
            <h4>{post.willDeliver}</h4>
          </div>
        );
      })}
    </div>
  );
}
export default AllPosts;
