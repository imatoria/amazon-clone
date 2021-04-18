import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </p>
          </>
        )}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
