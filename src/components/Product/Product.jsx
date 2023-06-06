import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/Slice/mainSlice";
export default function Product({ item }) {
  const basket = useSelector((state) => state.mainSlice);
  const dispatch = useDispatch();

  function AddToBasket() {
    const isItemInBasket = basket.some(
      (basketItem) => basketItem.id === item.id
    );
    const hasItemsFromOtherStore = basket.some(
      (basketItem) => basketItem.store !== item.store
    );

    if (!isItemInBasket && !hasItemsFromOtherStore) {
      dispatch(add(item));
    } else
      alert(
        "U can order products only from one shop, please disable other shops "
      );
  }
  return (
    <li>
      <div></div>
      {item.name} price: {item.price}
      <button onClick={AddToBasket}>Add to cart</button>
    </li>
  );
}
