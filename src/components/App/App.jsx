import Header from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCart from "../ShopCart/ShopCart";
import { Provider } from "react-redux";
import store from "../../store/store";
import "./App.scss";
import { Sidebar } from "../Sidebar/Sidebar";
import { routesConfig } from "../../routs";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            {routesConfig.map((route, index) => {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
