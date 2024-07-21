"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Write = () => {
  const [text, setText] = useState("");
  const handleChange = (content) => {
    setText(content);
  };

  return (
    <div>
      <h2 className="text-2xl text-center mt-10">Create a new Post</h2>
      <form>
        <input
          className="w-full border my-5 p-4 outline-none"
          type="text"
          placeholder="Title"
        />
      </form>
      <ReactQuill
        className="h-[120px]"
        placeholder="What are you thinking?"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default Write;
