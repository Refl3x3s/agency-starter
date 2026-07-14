import coffeeHero from "../assets/images/portfolio/coffee-hero.jpg";
import espresso from "../assets/images/portfolio/coffee-espresso.avif";
import latte from "../assets/images/portfolio/coffee-latte.avif";
import cheesecake from "../assets/images/portfolio/coffee-cheesecake.avif";
import acrHero from "../assets/images/portfolio/acr-hero.jpg";
import acrClases from "../assets/images/portfolio/acr-clases.jpg";
import acrInstalaciones from "../assets/images/portfolio/acr-instalaciones.jpg";
import acrPlanes from "../assets/images/portfolio/acr-planes.jpg";

const portfolio = [
  {
    id: "cafe-aurora",
    name: "Café Aurora",
    heroImage: coffeeHero,
    heroAlt: "Página web de Café Aurora",
    heroWidth: 1535,
    heroHeight: 1024,
    description:
      "Diseñamos una página moderna que muestra su menú, ubicación y permite reservar mesa en segundos, ayudándolos a atraer más clientes desde el primer día.",
    highlights: [
      { label: "Reservas online", value: "+40%" },
      { label: "Tiempo de carga", value: "0.8s" },
      { label: "Tiempo de entrega", value: "2 semanas" },
    ],
    gallery: [
      { image: espresso, alt: "Espresso servido en Café Aurora", width: 500, height: 750 },
      { image: latte, alt: "Latte art de Café Aurora", width: 500, height: 333 },
      { image: cheesecake, alt: "Cheesecake artesanal de Café Aurora", width: 500, height: 443 },
    ],
  },
  {
    id: "acr-sport-fitness",
    name: "ACR Sport & Fitness",
    heroImage: acrHero,
    heroAlt: "Página web de ACR Sport & Fitness",
    heroWidth: 1280,
    heroHeight: 900,
    description:
      "Un gimnasio premium en Cajicá que necesitaba una imagen a la altura de sus instalaciones. Diseñamos un sitio oscuro y cinematográfico con planes de membresía, clases grupales y contacto directo por WhatsApp.",
    highlights: [
      { label: "Secciones a medida", value: "8" },
      { label: "Contacto directo", value: "WhatsApp" },
      { label: "Identidad visual", value: "100% a medida" },
    ],
    gallery: [
      {
        image: acrClases,
        alt: "Sección de clases grupales de ACR Sport & Fitness",
        width: 500,
        height: 322,
      },
      {
        image: acrInstalaciones,
        alt: "Sección de instalaciones de ACR Sport & Fitness",
        width: 500,
        height: 322,
      },
      {
        image: acrPlanes,
        alt: "Sección de planes de membresía de ACR Sport & Fitness",
        width: 500,
        height: 322,
      },
    ],
  },
];

export default portfolio;
