
import React, {useState} from "react"
import "./Productlist.css"
import productdata from "./ProductListData/productapple"
import productsamsung from "./ProductListData/Productsamsung"
import productRedmi from "./ProductListData/ProductRedmi"
import productHuawei from "./ProductListData/ProductHuawei"
   import {Link} from "react-router-dom";


function Productlist({  addToCart }) {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }



  return(
    <div>
    <div className="bg">
       < >
      
       <div className=" flex">
           {productdata.map((productdata1)=>{
            return(
              <div className="all-1 " key={productdata1.id}>
                <div  >
                  <div  className="img">
                    <Link to={`/Productdet/${productdata1.id}`}>
                      <img src={productdata1.cover} alt='' />
                    </Link>
                  </div>
               <div>
                  <h3 className="hj">{productdata1.name}</h3>
                     <div className='price  fg'>
                       <h4>${productdata1.price}.00 </h4>
                       <button className="lc" onClick={() => addToCart(productdata1)}>
                           <div className="ld">
                             <i className='fa fa-plus '></i>
                           </div>
                       </button>
                     </div>
                </div>
                   </div>
            </div>
             ) 
            })} 
        
       </div>
             

     </>
</div>



    {/* two */}


    <div className="bg">
       < >
      
       <div className=" flex">
           {productsamsung.map((productdata1)=>{
            return(
              <div className="all-1 " key={productdata1.id}>
                <div  >
                  <div  className="img">
                    <Link to={`/Productdet/${productdata1.id}`}>
                      <img src={productdata1.cover} alt='' />
                    </Link>
                  </div>
               <div>
                  <h3 className="hj">{productdata1.name}</h3>
                     <div className='price  fg'>
                       <h4>${productdata1.price}.00 </h4>
                       <button className="lc" onClick={() => addToCart(productdata1)}>
                           <div className="ld">
                             <i className='fa fa-plus '></i>
                           </div>
                       </button>
                     </div>
                </div>
                   </div>
            </div>
             ) 
            })} 
        
       </div>
             

     </>
</div>


{/* three */}


<div className="bg">
       < >
      
       <div className=" flex">
           {productRedmi.map((productdata1)=>{
            return(
              <div className="all-1 " key={productdata1.id}>
                <div  >
                  <div  className="img">
                    <Link to={`/Productdet/${productdata1.id}`}>
                      <img src={productdata1.cover} alt='' />
                    </Link>
                  </div>
               <div>
                  <h3 className="hj">{productdata1.name}</h3>
                     <div className='price  fg'>
                       <h4>${productdata1.price}.00 </h4>
                       <button className="lc" onClick={() => addToCart(productdata1)}>
                           <div className="ld">
                             <i className='fa fa-plus '></i>
                           </div>
                       </button>
                     </div>
                </div>
                   </div>
            </div>
             ) 
            })} 
        
       </div>
             

     </>
</div>
      
      
{/* 4 */}


<div className="bg">
       < >
      
       <div className=" flex">
           {productHuawei.map((productdata1)=>{
            return(
              <div className="all-1 " key={productdata1.id}>
                <div  >
                  <div  className="img">
                    <Link to={`/Productdet/${productdata1.id}`}>
                      <img src={productdata1.cover} alt='' />
                    </Link>
                  </div>
               <div>
                  <h3 className="hj">{productdata1.name}</h3>
                     <div className='price  fg'>
                       <h4>${productdata1.price}.00 </h4>
                       <button className="lc" onClick={() => addToCart(productdata1)}>
                           <div className="ld">
                             <i className='fa fa-plus '></i>
                           </div>
                       </button>
                     </div>
                </div>
                   </div>
            </div>
             ) 
            })} 
        
       </div>
             

     </>
</div>


     </div>
  )
}

export default Productlist