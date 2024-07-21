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
      <form>
        <input type="text" placeholder="Title" />
      </form>
      <ReactQuill
        placeholder="What are you thinking?"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default Write;
