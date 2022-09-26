export default function PageNumbers({ pageCount, currPage }) {
    let pageLinks = []

    currPage = parseInt(currPage);
    let start = 0;
    let end = pageCount;
    // Deal with this once I get more posts

    // let towardBeginning = true;
    // let towardEnd = false
    
    // if(pageCount >= 10){
    //     if(currPage > 4 && currPage < pageCount - 2){
    //         start = currPage - 3;
    //         end = currPage + 2;
    //     }
    //     else if(currPage >= pageCount - 2){
    //         start = pageCount - 5;
    //         end = pageCount;
    //         towardEnd = true;
    //     }
    //     if(currPage > 4){
    //         towardBeginning = false;
    //     }
    // }

    // if(!towardBeginning){
    //     pageLinks.push(<a className="px-2 mx-1 phone:mx-2 font-garramond phone:text-xl" key={"index"} href={'/'}>1</a>);
    //     pageLinks.push(<p className="px-2 mx-1 phone:mx-2 font-garramond phone:text-xl" key={"startEllipses"}>...</p>);
    // }

    for(let i = start; i < end; i++){
        let pageNum = i + 1
        let link;
        if(pageNum == 1){
            link = '/'
        }
        else{
            link = '/page/' + pageNum
        }

        if(i == currPage - 1){
            pageLinks.push(<a className="px-2 mx-1 phone:mx-2 font-bold phone:text-xl font-raleway" key={pageNum} href={link}>{pageNum}</a>);
        }
        else{
            pageLinks.push(<a className="px-2 mx-1 phone:mx-2 phone:text-xl font-raleway " key={pageNum} href={link}>{pageNum}</a>);
        }
    }

    // if(!towardEnd){
    //     pageLinks.push(<p className="px-2 mx-1 phone:mx-2 font-garramond phone:text-xl" key={"endEllipses"}>...</p>);  
    //     pageLinks.push(<a className="px-2 mx-1 phone:mx-2 font-garramond phone:text-xl" key={"lastPage"} href={'/page/' + pageCount}>{pageCount}</a>);
    // }

    return (
        <>
            <div className="w-3/5 phone:w-2/5 flex flex-row justify-center mt-7">
                {pageLinks}
            </div>
        </>
    )
}