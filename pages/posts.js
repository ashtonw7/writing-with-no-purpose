import PostsPage from "@components/PostsPage";
import HeadTag from "@components/HeadTag";

import matter from "gray-matter";

export function getStaticProps(){
  const fs = require('fs');
  const files = fs.readdirSync('posts');
  let posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter
    };
  });

  let perPage = 5;
  let totalPosts = posts.length;

  posts.sort(function(a,b){
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  posts = posts.slice(0, perPage)

  return{
    props: {
      posts: posts,
      totalPosts: totalPosts,
      perPage: perPage
    }
  }
}

export default function Home({ posts, totalPosts, perPage }) {
  let postsInfo = {
    currentPage: "1",
    pageCount: Math.ceil(totalPosts / perPage),
    perPage: perPage,
    posts: posts,
    totalCount: totalPosts
  }

  return (
    <>
      <HeadTag title="Fat Puppet" link="" image={'portrait'} description={"Fat Puppet is a humorous online publication written by Ashton Winters. Funny stories, offbeats essays, wacky lists—at Fat Puppet you can have it all."} />
      <PostsPage postsInfo={postsInfo} />
    </>
  );
}