import ArticleCard from "./ArticleCard"

export default function ReadMore({ randFiles }) {
    return (
        <div className='flex flex-col justify-center mt-10 border-t w-full'>
            <h2 className="text-3xl phone:text-5xl text-center mt-10 underline decoration-2 underline-offset-[6px] mb-10">Read More</h2>
            <div className="w-full">
            {Object.keys(randFiles).map((item => (
                <ArticleCard key={randFiles[item].slug} slug={randFiles[item].slug} title={randFiles[item].frontmatter.title} author={randFiles[item].frontmatter.author} quote={randFiles[item].frontmatter.quote} date={randFiles[item].frontmatter.date} />
            )))}
            </div>
        </div>
    )
}