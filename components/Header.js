import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    
    const [open, setOpen] = useState(false);
    let imageLink = '/assets/images/' + 'castle_logo' + '.png';
    return (
      <div>
        <div className='flex justify-center items-center h-auto regular:h-[8rem] mb-3 galaxyfold:my-3 regular:my-5'>            
            <Link  href="/">
              <a className="galaxy-fold:w-auto text-center">
                  <div className="flex flex-rows" />
                    <div className='font-dominique verticalindex:text-[3rem] text-[2.5rem] galaxyfold:text-5xl verticalindex:text-8xl -mb-2 regular:mb-0'>
                      FAT PUPPET
                    </div>
                    <div className='verticalindex:tracking-[0.35em] font-merriweatherextrabold text-black text-[1em] text-xs galaxyfold:text-sm verticalindex:text-lg'>
                      WRITING WITH NO PURPOSE
                    </div>
                  <div/>
              </a>
            </Link>

            <div className="absolute left-1 regular:hidden" onClick={() => {
                  setOpen(!open);
              }}>
                  <svg className={`w-7 h-7 ${open ? "hidden" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <svg className={`w-7 h-7 ${open ? "" : "hidden"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </div>

        </div>
        
        {/* Mobile Navbar */}
        <span className={`content regular:hidden`}>
          <nav className={`${open ? "content" : "hidden"} border-b`}>
              <div className="flex flex-col ml-4">

                <div className="text-left mr-3 font-merriweatherlight text-gray-900 hover:text-black my-2 text-xl" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  <Link href="/" >
                      Posts
                  </Link>
                </div>

                <div className="text-left mr-3  font-merriweatherlight text-gray-900 hover:text-black my-2 text-xl" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  <Link href="/about">
                      About
                  </Link>
                </div>

                <div className="text-left mr-3  font-merriweatherlight text-gray-900 hover:text-black my-2 text-xl" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  <Link href="/contact">
                      Contact
                  </Link>
                </div>
              </div>
          </nav>
        </span>

        <nav className="flex justify-center items-center filter drop-shadow-md bg-white border-t border-t-gray-200">
            <ul className="mt-3 mb-5 space-x-20 items-center font-merriweatherlight hidden regular:flex">
              <li>
                <img height={40} width={40} src={imageLink} alt="castle" />
              </li>
              
              <li> 
                <Link href="/">
                    <a className="text-gray-900 hover:text-black">POSTS</a>
                </Link>  
              </li>

              <li>
                <img height={40} width={40} src={imageLink} alt="castle" />
              </li>

              <li>
                <Link href="/about">
                  <a className="text-gray-900 hover:text-black">ABOUT</a>
                </Link>
              </li>

              <li>
                <img height={40} width={40} src={imageLink} alt="castle" />
              </li>

              <li>
                <Link href="/contact">
                  <a className="text-gray-900 hover:text-black">CONTACT</a>
                </Link>
              </li>

              <li>
                <img height={40} width={40} src={imageLink} alt="castle" />
              </li>                            
            </ul>
        </nav>
      </div>
    )
}