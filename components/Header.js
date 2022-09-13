import Link from 'next/link'
import Image from 'next/image'
import castleLogo from 'public/assets/images/castle_logo.png'
import { useState } from 'react'

export default function Header() {

    const [open, setOpen] = useState(false)

    return (
      <div>
        <nav className='flex justify-between galaxyfold:justify-center items-center regular:h-20 border-b border-b-gray-200'>            
            <Link  href="/">
              <a className="ml-1 galaxyfold:ml-0 font-merriweather text-l regular:text-6xl galaxyfold:text-xl">
                WRITING WITH NO PURPOSE
              </a>
            </Link>

            <div className="absolute right-0 regular:hidden" onClick={() => {
                  setOpen(!open);
              }}>
                  <svg className={`w-7 h-7 ${open ? "hidden" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <svg className={`w-7 h-7 ${open ? "" : "hidden"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </div>

        </nav>
        
        {/* Mobile Navbar */}
        <span className={`content regular:hidden`}>
          <nav className={`${open ? "content" : "hidden"}`}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
              <Link className="text-xl font-semibold" href="/">Search</Link>
            </div>
            <div className="flex flex-col ml-4">
              <Link className="text-xl font-medium my-4" href="/" >
                  <span onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>About</span>
              </Link>
              <Link className="text-xl font-normal my-4" href="/">
              <span onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Contact</span>
              </Link>
            </div>  
          </nav>
        </span>

        <nav className="flex justify-center items-center filter drop-shadow-md bg-white">
            <ul className="mt-3 mb-5 space-x-20 items-center font-opensans hidden regular:flex">
              <li> 
                <Link href="/">
                    <a className="text-gray-900 hover:text-black">HOME</a>
                </Link>  
              </li>

              <li>
                <Image height={40} width={40} src={castleLogo} alt={"castle"} />
              </li>

              <li>
                <Link href="/">
                  <a className="text-gray-900 hover:text-black">ABOUT</a>
                </Link>
              </li>

              <li>
                <Image height={40} width={40} src={castleLogo}/>
              </li>

              <li>
                <Link href="/">
                  <a className="text-gray-900 hover:text-black">CONTACT</a>
                </Link>
              </li>

              <li>
                <Image height={40} width={40} src={castleLogo}/>
              </li>

              <li>
                <Link href="/">
                  <a className="text-gray-900 hover:text-black">SEARCH</a>
                </Link>
              </li>                            
            </ul>
        </nav>
      </div>
    )
}