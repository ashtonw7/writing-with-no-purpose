import PostsPage from "@components/PostsPages";
import { useEffect, useState } from "react";

export default function Home() {
  const [postsInfo, setPostsInfo] = useState("")

  useEffect(() => {
      fetch('/api/getPosts?page=1')
      .then(res => res.json())
      .then(postsJSON=> {
        setPostsInfo(postsJSON)
      })
  }, []);

  console.log(postsInfo)

  return (
    <>
      { postsInfo ? <PostsPage page={"1"} postsInfo={postsInfo} /> : null }
    </>
  );
}