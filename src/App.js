import { Route, Routes } from "react-router-dom";
import Header from "./app/components/Header";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUs";
import CheckoutPage from "./pages/CheckoutPage";
import Cart from "./app/components/Cart";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
