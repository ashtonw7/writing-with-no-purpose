import Head from "next/head";

import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
const fs = require('fs');

import ArticleCard from '../components/ArticleCard'

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

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Writing with No Purpose</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='hidden'>Writing with No Purpose</h1>

      {posts.map(({ slug, frontmatter }) => (
        <ArticleCard key={slug} slug={slug} title={frontmatter.title} author={frontmatter.author} quote={frontmatter.quote} img={frontmatter.image} date={frontmatter.date} />
      ))}
    </div>
  );
}
