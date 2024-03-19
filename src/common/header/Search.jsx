import React from "react"
import logo from "../../components/assets/images/logo.svg"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom/cjs/react-router-dom"
import { Badge } from "@material-ui/core";
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import "./Header.css"
const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className=' container c_flex'>
          <div className=' logo1'>
            
            Apple
          </div>

          
            


          <div >
          <Navbar />
          </div>

          <div className='icon f_flex width  mn'>
             <Link to="./Login">
            <i className='fa fa-user icon-circle'></i>
            </Link>
            <div className='cart'>
              <Link to='/cart'>
                 <i className='fa fa-shopping-bag icon-circle'></i>
                 <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
          

         
        </div>
      </section>
    </>
  )
}

export default Search
