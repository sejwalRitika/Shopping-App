import { NavLink } from "react-router-dom";

const Notfound = () =>{
return(
<div className="container">
<div className="product py-2">
<div className="details p-3">
page not found. Go to{""}
<NavLink to="/" replace>
homepage
</NavLink>
</div>
</div>
</div>
)
}

export { Notfound };

