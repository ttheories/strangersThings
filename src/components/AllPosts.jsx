//  This component should render all posts
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";
import SinglePost from "./SinglePost";

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
        return <SinglePost post={post} />;
      })}
    </div>
  );
}
export default AllPosts;
