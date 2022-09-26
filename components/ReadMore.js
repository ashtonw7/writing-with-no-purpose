import ArticleCard from "./ArticleCard"

export default function ReadMore({ randFiles }) {
    let randCards = [];
    let posts = Object.values(randFiles)

    for(let i=0; i<Object.keys(randFiles).length; i++){
        let post = randFiles[Object.keys(randFiles)[i]]
        let slug = post.slug;
        let frontmatter = post.frontmatter;

        randCards.push(<ArticleCard key={slug} slug={slug} title={frontmatter.title} author={frontmatter.author} quote={frontmatter.quote} date={frontmatter.date} currArticle={i + 1} totalCount={posts.length} />);
    }

    return (
        <div className='flex flex-col justify-center mt-10 mb-10'>
            <h2 className="text-3xl phone:text-5xl text-center underline decoration-2 underline-offset-[6px] mb-10">Read More</h2>
            {randCards}

            {/*
            {Object.keys(randFiles).map((item => (
                <ArticleCard key={randFiles[item].slug} slug={randFiles[item].slug} title={randFiles[item].frontmatter.title} author={randFiles[item].frontmatter.author} quote={randFiles[item].frontmatter.quote} date={randFiles[item].frontmatter.date} />
            )))}
            */ }

        </div>
    )
}