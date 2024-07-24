"use client";
import PostCard from "@/components/PostCard";
import { PostContext } from "@/context/postsContext";
import { useContext, useMemo } from "react";

const Home = () => {
  const { posts } = useContext(PostContext);
  const memoPosts = useMemo(() => posts, [posts]);
  return (
    <div className="my-5">
      <h2 className="text-2xl text-center">Post</h2>
      <div className="flex flex-row justify-center flex-wrap gap-4">
        {memoPosts.map((post) => (
          <div key={post.id}>
            <PostCard
              id={post.id}
              img={post.img}
              title={post.title}
              desc={post.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
