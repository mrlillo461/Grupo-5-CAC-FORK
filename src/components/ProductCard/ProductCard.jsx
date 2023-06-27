// import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"
import AirMax from "./ID1_Air_Max_1.png";  

function ProductCard() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-img">
          <img src={ AirMax } alt="ZAPAZ" />
        </div>
        <div className="card-content">
         <h2 className="card-title">Air Max 1</h2>
         <div className="card-details">
           <div className="size">
             <h3>Size :</h3>
             <span>42</span>
           </div>
           <div className="color">
             <h3>Color :</h3>
            <span></span>
          </div>
          <div className="price">
            <h3>$ 35.500</h3>
          </div>
         </div>
         <Link to={`/product/1`}>More Details</Link>
       </div>
      </div>
    </div>
  );

  // function ProductCard({ product }) {
  //   return (
  //     <div>
  //       <h3>{product.name}</h3>
  //       <p>Price: ${product.price}</p>
  //       <Link to={`/product/${product.id}`}>View Details</Link>
  //     </div>
  //   );
}

export default ProductCard;