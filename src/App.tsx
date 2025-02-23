import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailProductPage from "./pages/DetailProductPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Static Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />

        {/* Dynamic Routes */}
        <Route path="/products/:slug" element={<DetailProductPage />} />

        {/* Error Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
