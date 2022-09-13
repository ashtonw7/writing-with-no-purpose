import Link from 'next/link'
import styles from './Navbar.module.css'

import { useState } from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
      <div>
        <div className='flex justify-between galaxyfold:justify-center items-center regular:h-20 border-b border-b-gray-200'>

            <a className="ml-1 galaxyfold:ml-0 font-merriweather text-l regular:text-6xl galaxyfold:text-xl" href="/">WRITING WITH NO PURPOSE</a>

            <div className="absolute right-0 regular:hidden" onClick={() => {
                  setOpen(!open);
              }}>
                  <svg className={`w-7 h-7 ${open ? "hidden" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <svg className={`w-7 h-7 ${open ? "" : "hidden"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </div>

        </div>
        
        <span className={"content regular:hidden"}>
          <nav className={`${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
              <a className="text-xl font-semibold" href="/">Search</a>
            </div>
            <div className="flex flex-col ml-4">
              <a className="text-xl font-medium my-4" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  About
              </a>
              <a className="text-xl font-normal my-4" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  Contact
              </a>
            </div>  
          </nav>
        </span>

        <nav className="flex justify-center items-center filter drop-shadow-md bg-white">
            <ul className="mt-3 mb-3 font-helvetica hidden regular:flex">
              <li> 
                <NavLink to="/">
                    HOME
                </NavLink>  
              </li>
              <li>
                <NavLink to="/">
                    ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                    CONTACT
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                    SEARCH
                </NavLink>
              </li>                            
            </ul>
        </nav>
      </div>
    )
}