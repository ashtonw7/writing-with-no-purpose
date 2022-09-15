import HeadTag from '@components/HeadTag';

import PageTitle from '@components/PageTitle';

import matter from 'gray-matter';
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
  return (
    <div>
      <HeadTag title="Writing with No Purpose" />
      <PageTitle title="Posts" />
      {posts.map(({ slug, frontmatter }) => (
        <ArticleCard key={slug} slug={slug} title={frontmatter.title} author={frontmatter.author} quote={frontmatter.quote} img={frontmatter.image} date={frontmatter.date} />
      ))}
    </div>
  );
}
