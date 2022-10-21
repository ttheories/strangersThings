//  This component should render all posts
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";
import SinglePost from "./SinglePost";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  function postMatches(post, text) {
    return post.title.toLowerCase().includes(text);
  }

  useEffect(() => {
    async function getAllPosts() {
      const result = await fetchPosts();
      setPosts(result.data.posts);
    }
    getAllPosts();
  }, []);

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div>
      {/* <input
          value={}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="search items"
        /> */}
      {postsToDisplay.map((post) => {
        return <SinglePost post={post} />;
      })}
    </div>
  );
}

export default AllPosts;
