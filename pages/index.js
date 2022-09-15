import HeadTag from '@components/HeadTag';

import PageTitle from '@components/PageTitle';
import PostList from '@components/PostList';

import matter from 'gray-matter';
const fs = require('fs');

import { useEffect, useState } from 'react';

export async function getStaticProps() {
    
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  posts.sort(function(a,b){
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('/api/getPosts')
      .then(res => res.json())
      .then(jokeJSON=> {
        setData(jokeJSON)
      })
  }, []);
  console.log(data)

  return (
    <div>
      <HeadTag title="Writing with No Purpose" />
      <PageTitle title="Posts" />
      <PostList posts={posts} />
    </div>
  );
}
