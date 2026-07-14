import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import StructuredData from "./components/seo/StructuredData";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <>
      <StructuredData />
      <ScrollToTop />

      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
