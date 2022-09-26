import ArticleCard from "@components/ArticleCard"

export default function PostList({ posts }) {
    let artCards = [];
    for(let i=0; i<posts.length; i++){
        let post = posts[i];
        let slug = post.slug;
        let frontmatter = post.frontmatter;

        artCards.push(<ArticleCard key={slug} slug={slug} title={frontmatter.title} author={frontmatter.author} quote={frontmatter.quote} date={frontmatter.date} currArticle={i + 1} totalCount={posts.length} />);
    }

    return (
        <>
            {artCards}
        {/*
            {posts.map(({ slug, frontmatter }) => (
                <ArticleCard key={slug} slug={slug} title={frontmatter.title} author={frontmatter.author} quote={frontmatter.quote} date={frontmatter.date} />
            ))}
             */}
        </>
    )
}