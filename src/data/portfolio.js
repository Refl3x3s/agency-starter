import stepzHero from "../assets/images/portfolio/stepz-hero.jpg";
import acrHero from "../assets/images/portfolio/acr-hero.jpg";
import acrClases from "../assets/images/portfolio/acr-clases.jpg";
import acrInstalaciones from "../assets/images/portfolio/acr-instalaciones.jpg";
import acrPlanes from "../assets/images/portfolio/acr-planes.jpg";

const portfolio = [
  {
    id: "acr-sport-fitness",
    name: "ACR Sport & Fitness",
    type: "Gimnasio",
    featured: true,
    url: "https://acr-sport-fitness.netlify.app/",
    tagline: "Sitio oscuro y cinematográfico para un gimnasio premium en Cajicá.",
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
  {
    id: "stepz",
    name: "STEP.Z",
    type: "Gimnasio funcional",
    url: "https://stepzgymdemo.netlify.app",
    tagline: "Identidad azul y magenta para un gimnasio funcional en Tabio.",
    heroImage: stepzHero,
    heroAlt: "Página web de STEP.Z",
    heroWidth: 1280,
    heroHeight: 900,
    description:
      "Un gimnasio de entrenamiento funcional en Tabio que buscaba una marca con personalidad. Diseñamos un sitio oscuro con acentos en azul y magenta inspirados en su logo, planes de membresía y una galería de entrenamientos e instalaciones.",
    highlights: [
      { label: "Secciones a medida", value: "9" },
      { label: "Paleta de marca", value: "Azul + magenta" },
      { label: "Identidad visual", value: "100% a medida" },
    ],
    gallery: [],
  },
];

export default portfolio;
