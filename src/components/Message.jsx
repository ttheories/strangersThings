import { useState } from "react";
import useAuth from "../hooks/useAuth";
//import { createPost } from "../api/posts";
import { useNavigate } from "react-router-dom";

function CreateMessage() {
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await CreateMessage(message);
          console.log("Result from creating a message: ", result);
          navigate("/");
        }}
      >
        <h3> Post a Message</h3>
        <input
          value={title}
          placeholder="Message"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <button type="submit">Submit </button>
      </form>
    </div>
  );
}

export default CreateMessage;
