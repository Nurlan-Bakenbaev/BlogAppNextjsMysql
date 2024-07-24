"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getAllThePosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/posts");
      setPosts(response.data);
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
  useEffect(() => {
    getAllThePosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, getOnePost }}>
      {children}
    </PostContext.Provider>
  );
};
