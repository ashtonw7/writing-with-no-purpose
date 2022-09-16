import matter from 'gray-matter';
const fs = require('fs')

export const handler = async (event, context) => {
    const files = fs.readdirSync('./posts');
    let posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`./netlify/functions/posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter
      };
    });
  
    posts.sort(function(a,b){
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    });

    const page = event.queryStringParameters.page
    const perPage = 1
    const totalPosts = posts.length
    const totalPages = totalPosts / perPage
    const start = (page - 1) * perPage
    let end = start + perPage
    if (end > totalPosts) {
        end = totalPosts
    }
    
    return{
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "https://www.writingwithnopurpose.com",
          },
        body: JSON.stringify({
            currentPage: page,
            perPage: perPage,
            totalCount: totalPosts,
            pageCount: totalPages,
            start: start,
            end: end,
            posts: posts.slice(start, end)
        })
    }
}