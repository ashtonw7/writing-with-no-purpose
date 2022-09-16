import matter from 'gray-matter';
const fs = require('fs')

export const handler = async (event, context) => {
    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      return {
        slug,
      };
    });
    
    const randPost = posts[[Math.floor(Math.random()*posts.length)]].slug

    return{
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://www.writingwithnopurpose.com",
        },
        body: JSON.stringify({
            link: '/post/' + randPost
        })
    }
}