// import { useState } from "react";
// import useAuth from "../hooks/useAuth";
// //import { createPost } from "../api/posts";
// import { useNavigate } from "react-router-dom";

// function CreateMessage() {
//   const navigate = useNavigate();
//   const { token } = useAuth();
//   const [message, setMessage] = useState("");

const CreateMessage = () => {
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await CreateMessage(message);
          console.log("Result from creating the message: ", result);
        }}
      >
        <h6> Post a Message</h6>
        <input
          value={message}
          placeholder="Message"
          type="text"
          onChange={(e) => setMessage(e.target.value)}
        ></input>

        <button type="submit">Submit </button>
      </form>
    </div>
  );
};

export default CreateMessage;
