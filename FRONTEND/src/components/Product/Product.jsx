import React from 'react';
import './product.css';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';


 

const Product = ({ product }) => {

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "gold",
    size: window.innerWidth< 200 ? 15 :20,
    value: product.ratings,
    isHalf:true,

    
}
  return (
    
    <Link className='productCard' to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
             <ReactStars {...options}/> {""}
             <span>({product.numOfReviews} Reviews)</span>
        </div>
        <span>ZWL`${product.price}`</span>
    
    </Link>
  )
}

export default Product;