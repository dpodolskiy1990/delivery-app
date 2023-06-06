import "./Productlist.scss";

import Product from "../Product/Product";
export default function ProductList({ shop }) {
  if (!shop) {
    return null;
  }

  return (
    <div className="item">
      <h2>{shop.name}</h2>
      <ul>
        {shop.products.map((item) => (
          <Product key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}
