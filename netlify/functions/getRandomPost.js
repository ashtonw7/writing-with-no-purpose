import matter from 'gray-matter';
const fs = require('fs')

export const handler = async (event, context) => {
    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
      };
    });
    
    const randPost = posts[[Math.floor(Math.random()*posts.length)]].slug

    return{
        statusCode: 200,
        body: JSON.stringify({
            link: '/post/' + randPost
        })
    }
}