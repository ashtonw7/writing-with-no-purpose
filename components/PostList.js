import ArticleCard from "@components/ArticleCard"

export default function PostList({ posts }) {
    return (
        <>
            {posts.map(({ slug, frontmatter }) => (
                <ArticleCard key={slug} slug={slug} title={frontmatter.title} author={frontmatter.author} quote={frontmatter.quote} date={frontmatter.date} />
            ))}
        </>
    )
}