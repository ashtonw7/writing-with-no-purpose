import PostsPage from "@components/PostsPage";
import PageNumbers from "@components/PageNumbers";
import { useEffect, useState } from "react";
import Router from "next/router";

export default function Home() {
  const [postsInfo, setPostsInfo] = useState("")

  useEffect(() => {
      fetch('/api/getPosts?page=1',{
        method: 'GET',
      })
      .then(res => res.json())
      .then(postsJSON=> {
        setPostsInfo(postsJSON)
      })
  }, []);

  return (
    <>
      <PostsPage postsInfo={postsInfo} />
    </>
  );
}