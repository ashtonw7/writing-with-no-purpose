import HeadTag from "@components/HeadTag";
import PageTitle from "@components/PageTitle";

const fs = require('fs');
import { useEffect } from "react";

export async function getStaticProps() {
    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      return {
        slug,
      };
    });
    const randpost = '/post/' + posts[Math.floor(Math.random()*posts.length)].slug;

    return {
      props: {
        randpost,
      },
    };
}

export default function RandomPost({ randpost }) {        
    let loadedrand = randpost
    let link = loadedrand
    
    useEffect(() => {
        // window is accessible here.
        console.log(link)
        window.location.href = loadedrand
    }, []);
    
    return (
    <>
        <HeadTag title={"Writing with No Purpose"} />
    </>
  )
}