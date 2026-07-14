import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import StructuredData from "./components/seo/StructuredData";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Process from "./sections/Process";
import Pricing from "./sections/Pricing";
import CTA from "./sections/CTA";

function App() {
  return (
    <>
      <StructuredData />

      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;

