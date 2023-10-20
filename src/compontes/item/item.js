import { NavLink } from "react-router-dom";
const Item = ({data, addToCart})=>{
const {id, image, title, price} = data
return(
<div className="card">
<div className="grid">
<div className="image">
<img src={image} alt="" />
</div>
<div className="title">
<NavLink to={`/product/${id}`}className="link titleLink">
{title}
</NavLink>
</div>
<div className="flex">
<span className="price" style={{marginRight: 15}}>
${price}
</span>
<div className="cart" onClick={addToCart}>
<img className="cartImg" src="/card.svg" alt="" />
</div>
</div>
</div>
</div>
)
}
export { Item };

