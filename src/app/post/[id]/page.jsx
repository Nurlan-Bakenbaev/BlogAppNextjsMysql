"use client";
import PostCard from "@/components/PostCard";
import { PostContext } from "@/context/postsContext";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";

const SinglePostPage = () => {
  const { getOnePost } = useContext(PostContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getOnePost(id);
        setPost(postData[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [id]);
  console.log(post);
  if (loading) {
    return (
      <Stack
        sx={{ display: "flex", justifyContent: "center", color: "grey.500" }}
        direction="row">
        <CircularProgress color="secondary" />
      </Stack>
    );
  }
  return (
    <div className="flex flex-col  items-center">
      <h2 className="text-3xl my-5">Single Post Page</h2>
      <div>
        <Image width={600} height={600} src={post.img || "/posts.jpg"} />
        <h3 className="text-3xl">{post.title}</h3>
        <p>{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
