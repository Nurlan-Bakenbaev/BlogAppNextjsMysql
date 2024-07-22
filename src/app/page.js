import PostCard from "@/components/PostCard";
import React from "react";
const Home = () => {
  return (
    <div className="my-5">
      <h2 className="text-2xl text-center">Post</h2>
      <div className="flex flex-row justify-center flex-wrap gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Home;
