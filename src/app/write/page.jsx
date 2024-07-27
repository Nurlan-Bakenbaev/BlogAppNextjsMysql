"use client";
import { AuthContext } from "@/context/authContext";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [post, setPost] = useState({
    title: "",
    desc: "",
  });
  const { currentUser } = useContext(AuthContext);
 console.log(currentUser)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (value) => {
    setPost((prev) => ({ ...prev, desc: value }));
  };

  const modules = {
    toolbar: [
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const handlePost = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/posts", post, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error(
        "Error creating post:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-center gap-3 mt-5">Create a New Post</h2>
      <form>
        <input
          className="w-full border border-blue-300 my-5 p-4 outline-none"
          type="text"
          placeholder="Title"
          name="title"
          value={post.title}
          onChange={handleInputChange}
        />
      </form>
      <ReactQuill
        modules={modules}
        placeholder="What are you thinking?"
        value={post.desc}
        onChange={handleChange}
      />
      <Button
        onClick={handlePost}
        sx={{ marginTop: "10px" }}
        variant="contained">
        POST
      </Button>
    </div>
  );
};

export default Write;
