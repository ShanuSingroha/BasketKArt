import React from "react"
import "./Checkout.css"
import Subtotal from "./Subtotal"
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (

    <div className="checkout">
      <div className="checkout-left">

          <div >
        <h2 className="checkout-title">Your Shopping Cart</h2>
        {
          basket.map(item => ( <CheckoutProduct
            image = {item.image}
            price = {item.price}
            rating = {item.rating}
            title = {item.title}
            />))
        }

        </div>

      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>

    </div>
  );
}
export default Checkout;
