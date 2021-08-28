import React from "react"
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [ {basket}] = useStateValue();
  console.log(basket);
  const sum =  basket.reduce( (sum,basket) => sum+basket.price , 0) ;
  return (

    <div className="subtotal">
    <CurrencyFormat
    renderText={(value) => (
      <div>
      <p>
        Subtotal ({basket.length} items) :  <strong>{value}</strong>
      </p>
      <small className="subtotal-gift">
      <input type="checkbox" /> This order contans a gift
      </small>
      </div>
    )}
    decimalScale={2}
    value={sum}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"₹"}
    />
   <button>Proceed to Checkout</button>
    </div>
  );
}
export default Subtotal;
