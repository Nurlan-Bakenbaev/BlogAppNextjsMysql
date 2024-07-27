"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoding] = useState(true);

  const getAllThePosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/posts");
      setPosts(response.data);
      setLoding(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const getOnePost = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }; 
  //delete Post
  const deletePost = async (id) => {
    const res = await axios.delete(
      `http://localhost:8000/api/posts/delete/${id}`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  };

  useEffect(() => {
    getAllThePosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, getOnePost, loading, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};
