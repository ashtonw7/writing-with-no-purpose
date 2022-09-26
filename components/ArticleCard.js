import Link from "next/link"

export default function ArticleCard({ title, author, quote, date, slug, currArticle, totalCount }) {
    let imageLink;
    imageLink = '/assets/images/' + slug + '.png';

    let smallquote = quote.split(/\s+/).slice(0, 8).join(' ');
    let lastchar = smallquote.slice(-1);

    if (lastchar == ','){
        smallquote = smallquote.slice(0, -1);
    }
    lastchar = smallquote.slice(-1);
    if (lastchar != '.' && lastchar != '?' && lastchar != '!'){
        smallquote += '...'
    }

    let textSize = 'text-5xl'
    if(title.length > 5){
        textSize = 'text-xl'
    }

    title = title.toLowerCase();

    let bordert = 0;
    if(currArticle == 1){
        bordert = 1
    }

    return (
        <Link href={`/post/${slug}`}>
            <a className={`flex flex-col h-[18.4rem] max-w-[288px] verticalindex:max-w-none verticalindex:h-auto items-center verticalindex:items-stretch mb md:flex-row verticalindex:w-4/5 mx-auto bg-white hover:bg-gray-50 border-t border-t-${bordert} border-b`}>
                
                <img className="object-scale-down verticalindex:min-h-[275px] w-2/5 h-2/5 verticalindex:h-auto regular:w-48 mt-3 verticalindex:mb-3 verticalindex:ml-3 verticalindex:mr-5" src={imageLink} alt={slug}/>
                
                <div className="flex items-center">
                <div className=" flex flex-col p-4 items-center text-center verticalindex:text-left verticalindex:w-full">
                    {/* Bigger screen */}
                    <div className="hidden verticalindex:flex flex-col crunchycards:flex-row justify-between w-full">
                        <h2 className="mb-3 font-dominique text-5xl max-w-md">{title}</h2>
                        <span className="text-gray-500 mb-5 crunchycards:mb-0 font-tinos">{date}</span>
                    </div>

                    {/* Mobile */}
                    <div className="mb-1 verticalindex:hidden">
                        <h2 className={`font-dominique ${textSize}`}>{title}</h2>
                        <span className="text-gray-500 font-tinos">{date}</span>
                    </div>
                    
                    <p className="hidden verticalindex:inline text-xl text-gray-600 font-tinos">"{quote}"</p>
                    <p className="content verticalindex:hidden mb-3 text-lg text-gray-600 font-merriweather">"{smallquote}"</p>
                </div></div>
            </a>
        </Link>
    )
}