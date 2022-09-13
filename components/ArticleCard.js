import Link from "next/link"
import Image from "next/image"

export default function ArticleCard({ title, author, quote, img, date, slug }) {
    let imageLink = img
    imageLink = '/assets/images/' + slug + '.png';
    console.log(imageLink)

    return (
        <Link href={`/post/${slug}`}>
            <a className="flex flex-col items-center verticalindex:items-stretch mb-5 border shadow-md md:flex-row verticalindex:w-4/5 mx-auto  bg-white hover:bg-gray-50">
                
                <img className="object-scale-down w-2/5 h-2/5 verticalindex:h-auto regular:w-48" src={imageLink} alt=""/>
                
                <div className="text-center verticalindex:text-left verticalindex:w-full flex flex-col p-4">
                    {/* Bigger screen */}
                    <div className="hidden verticalindex:flex justify-between w-full">
                        <h5 className="mb-3 font-merriweather text-5xl">{title}</h5>
                        <span className="text-gray-500">{date}</span>
                    </div>

                    {/* Mobile */}
                    <div className="mb-3 verticalindex:hidden">
                        <h5 className="font-garramond text-5xl">{title}</h5>
                        <span className="text-gray-500">{date}</span>
                    </div>

                    <p className="mb-3 font-opensans text-l text-gray-600">"{quote}"</p>
                </div>

            </a>
        </Link>
    )
}