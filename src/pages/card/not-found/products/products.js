import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Item } from "../../../../compontes/item/item";
import { useCart } from "../../../../context/cart";
import { FakeStoreApi } from "../../../../servies/fake-store-api";
const Products = () =>{
const [loading, setLoading]= useState(true);
const [products, setProducts]= useState([]);
const [query]= useSearchParams();
const {addToCart} = useCart()
const searchQuery = query.get('q');
useEffect(()=>{
const fetchProducts = async () =>{
setLoading(true);
const products = searchQuery ? await FakeStoreApi.fetchProductsBySearchQuery(searchQuery) : await FakeStoreApi.fetchAllProducts();
setProducts(products);
setLoading(false);
}
fetchProducts().catch(console.error)
},[searchQuery])
if (!loading && searchQuery && !products.length){
return(
<div className="container">
<div className="product py-2">
<div className="details p-3">No product found matching your query.</div>
</div>
</div>
)
}
return(
<>
<div className="container">
<div className="products my-5">
<div  className="grid">
{loading ? (
<div className="loader"/>
):( 
products.map((product)=>(
<Item key={product.id}data={product}addToCart={() =>addToCart(product)}/>
))
)}
</div>
</div>
</div>
</>
)
}
export { Products };

