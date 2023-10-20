import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({onSearch, cartItemCount}) =>{
const [searchQuery, setSearchQuery]= useState('');
const handleSubmit = () =>{
if(searchQuery.trim().length){
onSearch(searchQuery.trim())
}
setSearchQuery('')
}
return(
<div className="wrapper">
<header className="container">
<div className="header py-2">
<div className="grid">
<NavLink to="/" className="link">
<h1 className="brand">E-commerce</h1>
</NavLink>
<div className="formContainer">
<form className="search">
<div className="form-control">
<input 
type="text"
value={searchQuery}
onChange={e => setSearchQuery(e.target.value)}
placeholder="Search products..."
/>
</div>
<button type="button" className="search-btn" onClick={handleSubmit}>
Search
</button>
</form>
</div>
<NavLink to="/card" className="link headerCart">
<img className="cartImg" src='/card.svg' alt="cart"/>
{cartItemCount > 0 && (
<div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
)}
</NavLink>
</div>
</div>
</header>
</div>
)
}
export { Navbar };

