import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { deletePost } from "../api/auth";
import { SearchPost } from "../api/auth";

function SearchPost(){
  const {postId} = useParams();
  const [searchPost, setSearchPost] = useState({});

  useEffect(()=>{
    async function getPostById(){
      const post = await  
    }
  }
}


async function DeletePost() {
    const result = await deletePost(post.id);
    console.log(result);

  }

