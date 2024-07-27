"use client";
import { PostContext } from "@/context/postsContext";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
const SinglePostPage = () => {
  const { getOnePost, deletePost } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const router = useRouter();
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
  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      router.push("/");
    } catch (error) {}
  };
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
        <Image
          width={600}
          height={600}
          src={post?.img || "/posts.jpg"}
          alt="Poster"
        />
        <div>
          <div className="flex gap-2 mt-3 items-baseline">
            <h3 className="text-3xl">{post?.title}</h3>
            {currentUser && (
              <>
                <Button variant="contained">
                  <EditIcon />
                </Button>
                <Button
                  onClick={() => handleDelete(post?.id)}
                  variant="contained">
                  <DeleteIcon />
                </Button>
              </>
            )}
          </div>
        </div>
        <p>{post?.desc}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
