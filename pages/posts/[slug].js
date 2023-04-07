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
    let filecount = files.length;

    let firstRandFile = null;
    if(filecount > 1){
      firstRandFile = files[Math.floor(Math.random() * files.length)];
      firstRandFile = firstRandFile.replace('.md', '');
      while(firstRandFile == slug){
        firstRandFile = files[Math.floor(Math.random() * files.length)];
        firstRandFile = firstRandFile.replace('.md', '');
      }
      firstRandFile = firstRandFile.replace('.md', '');
    }

    let secondRandFile = null;
    if(filecount > 2){
      secondRandFile = files[Math.floor(Math.random() * files.length)];
      secondRandFile = secondRandFile.replace('.md', '');
      while(secondRandFile == slug || secondRandFile == firstRandFile){
        secondRandFile = files[Math.floor(Math.random() * files.length)];
        secondRandFile = secondRandFile.replace('.md', '');
      }
      secondRandFile = secondRandFile.replace('.md', '');
    }

    let thirdRandFile = null;
    if(filecount > 3){
      thirdRandFile = files[Math.floor(Math.random() * files.length)];
      thirdRandFile = thirdRandFile.replace('.md', '');
      while(thirdRandFile == slug || thirdRandFile == firstRandFile || thirdRandFile == secondRandFile){
        thirdRandFile = files[Math.floor(Math.random() * files.length)];
        thirdRandFile = thirdRandFile.replace('.md', '');
      }
      thirdRandFile = thirdRandFile.replace('.md', '');
    }
    
    let randFiles = {};
    
    if(firstRandFile && !secondRandFile && !thirdRandFile){
      const { data: firstRandMatter } = matter(fs.readFileSync(`posts/${firstRandFile}.md`, 'utf-8'));

      randFiles = {
        first: {
          slug: firstRandFile,
          frontmatter: firstRandMatter,
        },
      }
    }
    else if(firstRandFile && secondRandFile && !thirdRandFile){
      const { data: firstRandMatter } = matter(fs.readFileSync(`posts/${firstRandFile}.md`, 'utf-8'));
      const { data: secondRandMatter } = matter(fs.readFileSync(`posts/${secondRandFile}.md`, 'utf-8'));

      randFiles = {
        first: {
          slug: firstRandFile,
          frontmatter: firstRandMatter,
        },
        second: {
          slug: secondRandFile,
          frontmatter: secondRandMatter
        }
      }
    }
    else{
      const { data: firstRandMatter } = matter(fs.readFileSync(`posts/${firstRandFile}.md`, 'utf-8'));
      const { data: secondRandMatter } = matter(fs.readFileSync(`posts/${secondRandFile}.md`, 'utf-8'));
      const { data: thirdRandMatter } = matter(fs.readFileSync(`posts/${thirdRandFile}.md`, 'utf-8'));

      randFiles = {
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
    function scrollToBottom(){
      let footer = document.getElementById('footer');
      let emailInput = document.getElementById('emailInput')
      footer.scrollIntoView({behavior:'smooth'})
      emailInput.focus({preventScroll: true})
    }

    return (
      <div>
        <div className='flex flex-col justify-center w-full'>

        <div className='flex justify-center'>
            <HeadTag title={frontmatter.title + ' | Fat Puppet'} link={'posts/' + frontmatter.slug} image={frontmatter.slug} description={frontmatter.quote} />
            <div className='items-center w-4/5'>
              <div className='flex justify-center mt-5'>
                <img className="object-scale-down justify-center h-[5rem] galaxyfold:h-[7rem] phone:h-36 verticalindex:h-48" src={'/assets/images/' + frontmatter.slug + ".png"} alt={frontmatter.slug}/>
              </div>

              <div className="w-full flex justify-center">
                <h1 className='w-[90%] text-[2rem] phone:text-6xl leading-9 phone:leading-[4rem] font-dominique text-center'>
                  {frontmatter.title.toLowerCase()}
                </h1>
              </div>

              <p className='text-xl phone:text-2xl text-center mb-10 text-gray-500 font-tinos'>{frontmatter.date}</p>
              
              <div className="w-full flex justify-center border-b">
              <div className='verticalindex:w-[90%]'>  
                <article className="article text-xl phone:text-2xl [&>*]:mb-5 font-tinos">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </article>
                
                <div id="buttons" className='mb-5 pt-2 pb-5 flex flex-row justify-between'>
                    {/* <div className='space-x-1 condenseheader:space-x-2 icons:space-x-5'>
                      <FacebookShareButton
                        url={'https://www.fatpuppet.com/posts/' + frontmatter.slug}
                      >
                        <FacebookIcon size={45} round />
                      </FacebookShareButton>

                      <TwitterShareButton
                        url={'https://www.fatpuppet.com/posts/' + frontmatter.slug}
                        title={'This is hilarious you all have to read this😂'}
                      >
                        <TwitterIcon size={45} round />
                      </TwitterShareButton>
                    </div> */}

                    <button type="button" className='flex flex-grow items-center justify-center mr-2 border border-1 border-black rounded-lg font-merriweathermediums hover:bg-[#FAFAFA]' onClick={() => scrollToBottom()}>
                        <span className='hidden buttons:contents'>
                          Join the Newsletter
                        </span>
                        <span className='contents buttons:hidden'>
                          Newsletter
                        </span>
                    </button>

                    <a href='https://ko-fi.com/C0C8FALNP' target='_blank' className='bg-zinc-800 hover:bg-black rounded-lg pr-2 h-[45px]'>
                      <div className="flex flex-row items-center">
                        <img className='h-[45px] ml-1' src='/assets/images/kofi-logo.png' alt='Buy Me a Coffee at ko-fi.com' />
                        {/* <span className='hidden condenseheader:contents font-merriweatherlight text-white'>Support Me on Ko-Fi</span> */}
                        <span className='font-merriweatherregular text-white'>Tip Jar</span>
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