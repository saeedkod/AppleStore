import React from "react"
import {useParams} from "react-router-dom"
import "./Productdet.css"
import productdata from "./ProductListData/Productdetall"
import photo from "../../photo/apple.jpg"


const Productdet = () => {
  
    const {userid} = useParams();
    const phone = productdata.find ((phone)=> phone.id === Number(userid) );
   
    const {name,price,p} = phone
   
  return (
    <>
     <div className="bg">
      
         <div className="cover">
            <img src={photo} alt='' />
         </div>


         <div className="text">
              <div className="n">
                {name}
              </div>
              <div>
                {p}
              </div>
              <div className="pr">
                 price:  {price}$
              </div>
         </div>
     


     </div>
    </>
  )
}

export default Productdet