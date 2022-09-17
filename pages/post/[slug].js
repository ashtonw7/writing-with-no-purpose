import HeadTag from '@components/HeadTag';
import ReadMore from '@components/ReadMore';

const fs = require('fs');
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
    const files = fs.readdirSync('posts');
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
    let files = fs.readdirSync('posts');

    let firstRandFile = files[Math.floor(Math.random() * files.length)];
    firstRandFile = firstRandFile.replace('.md', '');
    while(firstRandFile == slug){
      firstRandFile = files[Math.floor(Math.random() * files.length)];
      firstRandFile = firstRandFile.replace('.md', '');
    }
    firstRandFile = firstRandFile.replace('.md', '');

    let secondRandFile = files[Math.floor(Math.random() * files.length)];
    secondRandFile = secondRandFile.replace('.md', '');
    while(secondRandFile == slug || secondRandFile == firstRandFile){
      secondRandFile = files[Math.floor(Math.random() * files.length)];
      secondRandFile = secondRandFile.replace('.md', '');
    }
    secondRandFile = secondRandFile.replace('.md', '');

    let thirdRandFile = files[Math.floor(Math.random() * files.length)];
    thirdRandFile = thirdRandFile.replace('.md', '');
    while(thirdRandFile == slug || thirdRandFile == firstRandFile || thirdRandFile == secondRandFile){
      thirdRandFile = files[Math.floor(Math.random() * files.length)];
      thirdRandFile = thirdRandFile.replace('.md', '');
    }
    thirdRandFile = thirdRandFile.replace('.md', '');

    const { data: firstRandMatter } = matter(fs.readFileSync(`posts/${firstRandFile}.md`, 'utf-8'));
    const { data: secondRandMatter } = matter(fs.readFileSync(`posts/${secondRandFile}.md`, 'utf-8'));
    const { data: thirdRandMatter } = matter(fs.readFileSync(`posts/${thirdRandFile}.md`, 'utf-8'));

    let randFiles = {
      first: {
        slug: firstRandFile,
        frontmatter: firstRandMatter,
      },
      second: {
        slug: secondRandFile,
        frontmatter: secondRandMatter
      },
      third: {
        slug: thirdRandFile,
        frontmatter: thirdRandMatter
      },
    }

    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
        randFiles
      },
    };
}

export default function PostPage({ frontmatter, content, randFiles }) {
    return (
      <div className='flex flex-col'>
        <div className='flex justify-center mb-5'>
            <HeadTag title={frontmatter.title + ' | Writing with No Purpose'} />
            <div className='items-center w-4/5'>
              <div className='flex justify-center'>
              </div>
              <h1 className='text-4xl phone:text-6xl font-garramond text-center'>{frontmatter.title}</h1>
              <p className='phone:text-xl font-garramond text-center mb-10 text-gray-500'>{frontmatter.date}</p>
              <article className="article font-garramond text-xl verticalindex:text-2xl [&>*]:mb-5 [&>*]:font-garramond">
                <ReactMarkdown>{content}</ReactMarkdown>
              </article>
            </div>
        </div>
        <div className='flex justify-center mb-10'>
          <ReadMore randFiles={randFiles} />
        </div>
      </div>
    );
  } 