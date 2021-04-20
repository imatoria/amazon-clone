import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router";

const SubTotal = () => {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  const basketTotal = getBasketTotal(basket);

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={basketTotal}
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

      {basketTotal > 0 ? (
        <button onClick={(e) => history.push("/payment")}>
          Proceed to Checkout
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubTotal;
