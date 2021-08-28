import React from "react"
import "./Product.css"
import {useStateValue} from "./StateProvider"

function Product({title,price,rating,image}) {
  const [{basket},dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
        type : "ADD_TO_BASKET",
        item : {
          title : title,
          price : price,
          rating : rating,
          image : image
        },
    });
  };





  return (
    <div className="product"
    >
        <div className="product-info">
        <p className="product-price">{title}</p>
        <p className="product-price">₹<strong>{price}</strong></p>
        <div className="product-rating">
          { Array(rating).fill().map((_,i) => (<p>⭐</p>))  }
        </div>
        </div>
        <img src={image} alt="" />

        <button onClick={addToBasket}>Add To Cart</button>

        <div>


        </div>

        <div>

        </div>
    </div>

  );
}
export default Product;
