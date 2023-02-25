import { Route, Routes } from "react-router-dom";
import Header from "./app/components/Header";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUs";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="menuPage" element={<MenuPage />} />
        <Route path="aboutPage" element={<AboutPage />} />
        <Route path="checkoutPage" element={<CheckoutPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
