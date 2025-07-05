import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const { addToCart, removeFromCart } = cartActions;
  const dispatch = useDispatch();

  function handleIncreaseItemQuantity() {
    dispatch(
      addToCart({
        id: 1,
        price,
      })
    );
  }

  function handleDecreaseItemQuantity() {
    dispatch(removeFromCart({ id: 1, price }));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecreaseItemQuantity}>-</button>
          <button onClick={handleIncreaseItemQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
