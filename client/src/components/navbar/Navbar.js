import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BiCartDownload} from 'react-icons/bi'
import './Navbar.scss'
import Cart from '../cart/Cart'

function Navbar() {

  const [openCart, setOpenCart] = useState(false);
  return (
    <div className='Navbar'>
      <nav className="container nav-container">
        <div className="nav-left">
          <ul className='link-group'>
            <li className='hover-link'>
              <Link className='link' to="/products?category=comics" >Comics</Link>
            </li>
            <li className='hover-link'>
            <Link className='link' to="/products?category=tvshows" >TV Shows</Link>
            </li>
            <li className='hover-link'>
            <Link className='link' to="/products?category=sports" >Sports</Link>
            </li>
          </ul>
        </div>
        <div className="nav-center">
          <Link to="/">
          <h1 className='banner'>Posterz.</h1>
          </Link>
        </div>
        <div className="nav-right">
          <div className="nav-cart hover-link" onClick={() => setOpenCart(!openCart)}>
            <div className="icon">
              <BiCartDownload />
            </div>
            <span className='cart-count center'>99</span>
          </div>
        </div>
      </nav>
      { openCart && <Cart onClose={() => setOpenCart(false)} />}
    </div>
  )
}

export default Navbar