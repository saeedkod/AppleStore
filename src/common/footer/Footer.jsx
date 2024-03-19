import React from "react"
import "./style.css"
import { red } from "@mui/material/colors"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid21  '>
         

          <div className='box '>
            <h2>About Us</h2>
            <ul style={{color:"red"}}>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul style={{color:"red"}}>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul style={{color:"red"}}>
              <li>Iran,Boukan,ali:negin4 </li>
              <li>Email: saeedrazman7953@gmail.com</li>
              <li>Phone: 09149617953</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
