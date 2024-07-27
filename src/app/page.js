"use client";
import Loading from "@/components/Loading";
import PostCard from "@/components/PostCard";
import { PostContext } from "@/context/postsContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useMemo } from "react";

const Home = () => {
  const { posts, loading } = useContext(PostContext);
  const memoPosts = useMemo(() => posts, [posts]);
  console.log(posts);
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-medium">There are no Posts</h3>
        <Link href={"/write"}>
          <Image src={"/newpost.png"} width={500} height={500} alt="NoPosts" />
        </Link>
      </div>
    );
  }
  return (
    <div className="my-5">
      <h2 className="text-2xl text-center">Post</h2>
      <div className="flex flex-row justify-center flex-wrap gap-4">
        {loading && <Loading />}
        {memoPosts.map((post) => (
          <div key={post.id}>
            <PostCard
              id={post.id}
              img={post.img}
              title={post.title}
              desc={post.desc}
              date={post.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
