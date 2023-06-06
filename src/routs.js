import { Sidebar } from "./components/Sidebar/Sidebar";
import ShopCart from "./components/ShopCart/ShopCart";
export const routesConfig = [
  {
    path: "/",
    exact: true,
    element: <Sidebar />,
  },
  {
    path: "/Cart",
    exact: false,
    element: <ShopCart />,
  },
];
