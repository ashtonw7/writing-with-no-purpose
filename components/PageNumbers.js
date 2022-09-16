export default function PageNumbers({ pageCount, currPage }) {
    let pageLinks = []
    for(let i = 0; i < pageCount; i++){
        let pageNum = i + 1
        let link = '/page/' + pageNum
        pageLinks.push(<a key={pageNum} href={link}>{pageNum}</a>);
    }

    return (
        <>
            <div className="w-3/5 phone:w-2/5 flex flex-row justify-between">
                {pageLinks}
            </div>
        </>
    )
}