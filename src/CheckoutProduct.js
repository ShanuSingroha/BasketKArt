import React from "react"
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider";


function CheckoutProduct({image,price,rating,title}) {

  const [{basket}, dispatch] = useStateValue();
  function removeFromBasket  ()  {
      dispatch({
        type : "REMOVE_FROM_BASKET",
        title :   title
      })
  }


  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct_image"/>
      <div >
          <p className="checkoutProduct_title"> {title}
          </p>
          <p className="checkoutProduct_price"> ₹ {price}
          </p>
          <div className="checkoutProduct_rating">
          {Array(rating).fill().map( () => (<p>⭐</p>))}
          </div>
          <button onClick={removeFromBasket} className="checkoutProduct_button">Remove from Basket</button>

       </div>
    </div>
  );
}
export default CheckoutProduct;
