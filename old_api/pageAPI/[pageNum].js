import PostsPage from "@components/PostsPage";
import { useEffect, useState } from "react";

export const getServerSideProps = async (context) => {
    return{ 
        props: {
             pageNum: context.query.pageNum,
        } 
    };
};

export default function Page({ pageNum }) {
  const [postsInfo, setPostsInfo] = useState("")

  useEffect(() => {
    fetch(`/api/getPosts?page=${pageNum}` ,{
        method: 'GET',
    })
    .then(res => res.json())
    .then(postsJSON=> {
        setPostsInfo(postsJSON)
    })
  }, []);

  return (
    <>
      { <PostsPage postsInfo={postsInfo} /> }
    </>
  );
}