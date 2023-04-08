import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/components/Header";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUs";
import CheckoutPage from "./pages/CheckoutPage";
import Cart from "./app/components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="cart"
          element={<Cart cartItems={cartItems} updateCartItems={updateCartItems} />}
        />
        <Route
          path="checkout"
          element={<CheckoutPage cartItems={cartItems} updateCartItems={updateCartItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;