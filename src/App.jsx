import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Description from "./components/DescriptionComponent";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1 h-screen">
            {/* Sidebar - Keep it fixed to the left */}
            {/* Main content wrapper */}
            <div className="ml-0 w-full">
              <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </div>
          </div>
          {/* Footer - Fixed at the bottom */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;