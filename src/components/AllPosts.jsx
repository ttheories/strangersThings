//  This component should render all posts
import { useEffect, useState } from "react";
import { fetchPost } from "../api/posts";

function post() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function getAllPost() {
      const AllPosts = await fetchPost();
      setPost(AllPosts);
    }
  });
  post.map;
}
