import { useState, useEffect } from "react";
import "./ShopCart.scss";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { clearBasket } from "../../store/Slice/mainSlice";
import { useNavigate } from "react-router-dom";
export default function ShopCart() {
  const [total, setTotal] = useState("");
  const basket = useSelector((state) => state.mainSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function calculateTotal() {
    let sum = 0;
    basket.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }

  useEffect(() => {
    calculateTotal();
  }, [basket]);
  function handleOrder() {
    dispatch(clearBasket());
    navigate("/");
  }
  return (
    <div className="ShopCart">
      <div className="ShopCart__inputs">
        <form action="">
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" />
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" />
          <label htmlFor="Phone">Phone</label>
          <input type="text" name="Phone" />
          <label htmlFor="Adress">Adress</label>
          <input type="text" name="Adress" />
        </form>
        <span>Total price: {total}</span>
        <button onClick={handleOrder}>Order</button>
      </div>

      <div className="ShopCart__carts">
        <ul>
          {basket &&
            basket.map((item) => <CartItem item={item} key={item.id} />)}
        </ul>
      </div>
    </div>
  );
}
