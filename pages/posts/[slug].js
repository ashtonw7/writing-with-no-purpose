import HeadTag from '@components/HeadTag';
import ReadMore from '@components/ReadMore';
import Head from 'next/head';

const fs = require('fs');
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';

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
      <div>
        <div className='flex flex-col justify-center w-full'>

        <div className='flex justify-center'>
            <HeadTag title={frontmatter.title + ' | Fat Puppet'} link={'posts/' + frontmatter.slug} image={frontmatter.slug} description={frontmatter.quote} />
            <div className='items-center w-4/5'>
              <div className='flex justify-center mt-5'>
                <img className="object-scale-down justify-center h-[5rem] galaxyfold:h-[7rem] phone:h-36 verticalindex:h-48" src={'/assets/images/' + frontmatter.slug + ".png"} alt={frontmatter.slug}/>
              </div>

              <div class="w-full flex justify-center">
                <h1 className='w-[90%] text-[2.5rem] phone:text-6xl font-dominique text-center'>
                  {frontmatter.title.toLowerCase()}
                </h1>
              </div>

              <p className='text-lg phone:text-xl text-center mb-10 text-gray-500 font-tinos'>{frontmatter.date}</p>
              
              <div class="w-full flex justify-center border-b">
              <div className='verticalindex:w-[90%]'>  
                <article className="article text-xl phone:text-2xl [&>*]:mb-5 font-tinos">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </article>
                
                <div id="buttons" className='mb-5 py-5 flex flex-row justify-between'>
                    <div className='space-x-1 condenseheader:space-x-2 icons:space-x-5'>
                      <FacebookShareButton
                        url={'https://www.fatpuppet.com/posts/' + frontmatter.slug}
                      >
                        <FacebookIcon size={45} round />
                      </FacebookShareButton>

                      <TwitterShareButton
                        url={'https://www.fatpuppet.com/posts/' + frontmatter.slug}
                        title={'Lol this is hilarious you all have to read this😂'}
                      >
                        <TwitterIcon size={45} round />
                      </TwitterShareButton>
                    </div>

                    <a href='https://ko-fi.com/C0C8FALNP' target='_blank' className='bg-gray-800 hover:bg-gray-700 rounded-lg pr-2 h-[45px]'>
                      <div className="flex flex-row items-center">
                        <img className='h-[45px]' src='/assets/images/kofi-logo.png' alt='Buy Me a Coffee at ko-fi.com' />
                        <span className='hidden condenseheader:contents font-merriweatherlight text-white'>Support Me on Ko-Fi</span>
                        <span className='contents condenseheader:hidden font-merriweatherlight text-white'>Tip Jar</span>
                      </div>
                    </a>
          
                </div>

              </div>
              </div>

            </div>
            
        </div>

        </div>

        <div className='w-full'>
          <ReadMore randFiles={randFiles} />
        </div>

      </div>
    );
  } 