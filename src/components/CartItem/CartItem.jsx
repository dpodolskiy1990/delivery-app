import { useDispatch } from "react-redux";
import { del, changeQuantity } from "../../store/Slice/mainSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  function delItem() {
    dispatch(del(item.id));
  }
  function changeQuantityfunction(event) {
    dispatch(changeQuantity({ id: item.id, quantity: event.target.value }));
  }
  return (
    <li key={item.name}>
      <div className="shopCart-item">
        <div className="shopCart-item__img"></div>
        <p>Product name: {item.name}</p>
        <p>Product cost:{item.price}</p>
        <input
          type="number"
          value={item.quantity}
          min={1}
          onChange={changeQuantityfunction}
        />
        <button onClick={delItem}>del</button>
      </div>
    </li>
  );
}
