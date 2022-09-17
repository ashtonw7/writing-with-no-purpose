import ArticleCard from "./ArticleCard"

export default function ReadMore({ randFiles }) {
    console.log(randFiles)
    Object.keys(randFiles).map((key => console.log(randFiles[key])));

    return (
        <div className='flex flex-col justify-center mt-10 regular:mb-10 border-t w-full'>
            <h2 className="text-3xl phone:text-5xl font-garramond text-center mt-5 mb-10">Read More</h2>
            <div className="w-full">
            {Object.keys(randFiles).map((item => (
                <ArticleCard key={randFiles[item].slug} slug={randFiles[item].slug} title={randFiles[item].frontmatter.title} author={randFiles[item].frontmatter.author} quote={randFiles[item].frontmatter.quote} img={randFiles[item].frontmatter.image} date={randFiles[item].frontmatter.date} />
            )))}
            </div>
        </div>
    )
}