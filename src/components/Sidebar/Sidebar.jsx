import { useState } from "react";
import { ShopList } from "../../Shoplist";
import ProductList from "../ProductList/ProductList";
import "./Sidebar.scss";
export function Sidebar() {
  const [selectedShop, setSelectedShop] = useState(ShopList[0]);

  const handleShopClick = (shop) => {
    setSelectedShop(shop);
  };

  return (
    <div className="Shopping">
      <ul className="shoplist">
        {ShopList.map((item) => (
          <li
            key={item.name}
            onClick={() => handleShopClick(item)}
            className="shoplist__item"
          >
            {item.name}
          </li>
        ))}
      </ul>
      {selectedShop && <ProductList shop={selectedShop} />}
    </div>
  );
}
