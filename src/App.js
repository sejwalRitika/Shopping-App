import React from "react";
import { Route, Routes, createSearchParams, useNavigate } from "react-router-dom";
import { Navbar } from "./compontes/navbar/Navbar";
import { useCart } from "./context/cart";
import { Card } from "./pages/card";
import { Notfound } from "./pages/card/not-found/not-found";
import { Product } from "./pages/card/not-found/products/product/Product";
import { Products } from "./pages/card/not-found/products/products";
const App = () =>{
const navigate = useNavigate();
const {cartItemCount} = useCart();
const onSearch = (searchQuery) => {
navigate(`/?${createSearchParams({q: searchQuery})}`)
}
return(
<>
<Navbar onSearch={onSearch} cartItemCount={cartItemCount()}/>
<Routes>
<Route path="/"Component={Products}/>
<Route path="/product/:productId"Component={Product}/>
<Route path="/card"Component={Card}/>
<Route path="/*"Component={Notfound}/>
</Routes>
</>
)
}
export default App;
