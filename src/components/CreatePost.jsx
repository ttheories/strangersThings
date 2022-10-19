import { useState } from "react";
// import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import { createPost } from "../api/posts";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPost(
            title,
            description,
            price,
            location,
            willDeliver,
            token
          );
          console.log("Result from creating the post: ", result);
          navigate("/");
        }}
      >
        <h3> Create New Post</h3>
        <input
          value={title}
          placeholder="Title"
          //   type="text"
          onChange={(e) => setTitle(e.target.type)}
        ></input>
        <input
          value={description}
          placeholder="Description"
          //   type="text"
          onChange={(e) => setDescription(e.target.type)}
        ></input>
        <input
          value={price}
          placeholder="Price "
          //   type="text"
          onChange={(e) => setPrice(e.target.type)}
        ></input>
        <input
          value={location}
          placeholder="Location"
          //   type="text"
          onChange={(e) => setLocation(e.target.type)}
        ></input>
        <label>Will Deliver?</label>
        <input
          placeholder="Delivery"
          type="checkbox"
          onChange={(e) => setWillDeliver(!willDeliver)}
        ></input>
        <button type="submit">Submit </button>
      </form>
    </div>
  );
}

export default CreatePost;
