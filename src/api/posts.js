//  Function to fetch all posts from the api
import useAuth from "../hooks/useAuth";
export const fetchPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts"
  );
  const result = await response.json();
  return result;
};

// Write a function that creates a post
// check the api for POST to /api/posts/post_id
// You need to pass a valid token in the authorization header

export const createPost = async (
  title,
  description,
  price,
  location,
  willDeliver,
  token
) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          willDeliver,
          location,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
};

export async function deletePost(token, postId) {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts/${postId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
}
