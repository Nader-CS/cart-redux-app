import { CartIcon } from "../icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "../features/cart/cartSlice";

const Navbar = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{cart.amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
