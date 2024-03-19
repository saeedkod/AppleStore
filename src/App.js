import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import FlashDeals from "../src/components/flashDeals/FlashCard"
import Productlist from "./components/flashDeals/Productlist"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Productdet from "./components/flashDeals/Productdet"
import NewArrivals from "./components/newarrivals/NewArrivals"
import Discount from "./components/discount/Discount"
import Wrapper from "./components/wrapper/Wrapper"


function App() {


 
  const { productItems } = Data
 

 
  const [CartItem, setCartItem] = useState([])

 
  const addToCart = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)
 
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
 
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }


  const decreaseQty = (product) => {
  
    const productExit = CartItem.find((item) => item.id === product.id)

  
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {

      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path="/Productlist" exact>
            <Productlist  productItems={productItems} addToCart={addToCart}  />
          </Route>
          <Route path="/Login" exact>
            <Login/>
          </Route>
          <Route path="/Register" exact>
            <Register/>
          </Route>
          <Route path="/Productdet/:userid" exact>
            <Productdet/>
          </Route>
          <Route path="/prouducts" exact>
            <FlashDeals productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path="/beastbrand" exact>
            <NewArrivals />
          </Route>
          <Route path="/Discount" exact>
             <Discount />
          </Route>
          <Route path="/buy" exact>
          <Wrapper />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
