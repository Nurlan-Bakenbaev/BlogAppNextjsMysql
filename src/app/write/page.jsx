"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Write = () => {
  const [post, setPost] = useState({
    title: "",
    post: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };
  const handleChange = (value) => {
    setPost((prev) => ({ ...prev, post: value }));
  };
  console.log(post);
  const modules = {
    toolbar: [
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <div>
      <h2 className="text-2xl text-center mt-10">Create a new Post</h2>
      <form>
        <input
          className="w-full border border-blue-300 my-5 p-4 outline-none"
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleInputChange}
        />
      </form>
      <ReactQuill
        modules={modules}
        placeholder="What are you thinking?"
        value={post.post}
        name="post"
        onChange={handleChange}
      />
    </div>
  );
};

export default Write;
