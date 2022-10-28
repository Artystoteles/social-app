import React from "react";
import CreateForm from "./createForm";

const CreatePost = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid red",
        width: "50%",
      }}
    >
      <CreateForm />
    </div>
  );
};

export default CreatePost;
