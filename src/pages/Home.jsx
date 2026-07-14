import Hero from "../sections/Hero";
import Services from "../sections/Services";
import FeaturedProject from "../sections/FeaturedProject";
import Process from "../sections/Process";
import Pricing from "../sections/Pricing";
import CTA from "../sections/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProject />
      <Process />
      <Pricing />
      <CTA />
    </>
  );
}

export default Home;
