import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"
const Navbar = () => {

  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
       

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-mobile" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
           
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='./prouducts'>product</Link>
              </li>
              <li>
                <Link to='/beastbrand'>beastbrand</Link>
              </li>
              <li>
                <Link to='/Discount'>ournext</Link>
              </li>
              <li>
                <Link to='/buy'>buy</Link>
              </li>
              <li className="ac">
                <Link to="./Login">login</Link>
              </li>
              <li className="ac" >
                <Link to="./Register">signup</Link>
              </li>

            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
