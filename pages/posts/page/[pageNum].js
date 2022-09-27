import PostsPage from "@components/PostsPage";
import matter from "gray-matter";
import HeadTag from "@components/HeadTag";
const fs = require('fs');

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  let posts = files.map((fileName) => {
    return {
      fileName
    };
  });
  
  let perPage = 5;
  let totalPosts = posts.length;
  
  let pageCount = Math.ceil(totalPosts / perPage);
  let pages = [];

  for(let i=0; i < pageCount; i++){
    pages.push(i + 1);
  }

  const paths = pages.map((num) => ({
      params: {
        pageNum: num.toString(),
      },
  }));
  
  return {
      paths,
      fallback: false,
  };
}

export async function getStaticProps({ params: { pageNum } }) {
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
  const totalPages = totalPosts / perPage
  const start = (pageNum - 1) * perPage
  let end = start + perPage
  if (end > totalPosts) {
      end = totalPosts
  }

  posts.sort(function(a,b){
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  posts = posts.slice(start, end)

  let postsInfo = {
      currentPage: pageNum,
      pageCount: Math.ceil(totalPosts / perPage),
      perPage: perPage,
      posts: posts,
      totalCount: totalPosts
  };

  return {
    props: {
      postsInfo,
    },
  };
}


export default function PostPage({ postsInfo }) {
  return (
    <>
      <HeadTag title={"Page " + postsInfo.currentPage + " | Fat Puppet"} description={"Fat Puppet is a humorous online publication written by Ashton Winters. Funny stories, offbeats essays, wacky lists—at Fat Puppet you can have it all."} />
      { <PostsPage postsInfo={postsInfo} /> }
    </>
  );
}