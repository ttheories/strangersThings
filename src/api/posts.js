//  Write a function to fetch all posts from the api
export const fetchPost = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts"
  );
  const result = await response.json();
  return result;
};

export const fetchPostById = async (id) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts/${id}"
  );
  const result = await response.json();
  return result;
};
