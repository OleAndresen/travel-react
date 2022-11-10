import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import './Navbar.css'

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
        <div className={nav ? 'logo dark' : 'logo'}>
          <h2>Travel</h2>
        </div>
        <ul className='nav-menu'>
          <li><a href="/">Home</a></li>
          <li><a href="/europe">Europe</a></li>
          <li><a href="/asia">Asia</a></li>
          <li><a href="/africa">Africa</a></li>
          <li><a href="/">About</a></li>
        </ul>
        <div className='nav-icons'>
          <BiSearch className='icon' style={{ marginRight: '1rem' }} />
        </div>
        <div className='hamburger' onClick={handleNav}>
          {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          <ul className="mobile-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/europe">Europe</a></li>
            <li><a href="/asia">Asia</a></li>
            <li><a href="/africa">Africa</a></li>
            <li><a href="/">About</a></li>
          </ul>
          <div className='mobile-menu-bottom'>
            <div className='menu-icons'>
              <button>Search</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar