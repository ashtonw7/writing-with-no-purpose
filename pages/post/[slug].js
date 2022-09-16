import HeadTag from '@components/HeadTag';

const fs = require('fs');
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
    const files = fs.readdirSync('/netlify/functions/posts');
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
}

export default function PostPage({ frontmatter, content }) {
    return (
    <div className='flex justify-center mb-10'>
        <HeadTag title={frontmatter.title + ' | Writing with No Purpose'} />
        <div className='items-center w-4/5'>
          <h1 className='text-4xl phone:text-6xl font-garramond text-center'>{frontmatter.title}</h1>
          <p className='phone:text-xl font-garramond text-center mb-10 text-gray-500'>{frontmatter.date}</p>
          <article className="article font-garramond text-xl verticalindex:text-2xl [&>*]:mb-5 [&>*]:font-garramond">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
    </div>
    );
  } 