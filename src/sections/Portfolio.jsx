import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import coffeeHero from "../assets/images/portfolio/coffee-hero.jpg";
import espresso from "../assets/images/portfolio/coffee-espresso.avif";
import latte from "../assets/images/portfolio/coffee-latte.avif";
import cheesecake from "../assets/images/portfolio/coffee-cheesecake.avif";

const highlights = [
  { label: "Reservas online", value: "+40%" },
  { label: "Tiempo de carga", value: "0.8s" },
  { label: "Tiempo de entrega", value: "2 semanas" },
];

const gallery = [
  { image: espresso, alt: "Espresso servido en Café Aurora", width: 500, height: 750 },
  { image: latte, alt: "Latte art de Café Aurora", width: 500, height: 333 },
  { image: cheesecake, alt: "Cheesecake artesanal de Café Aurora", width: 500, height: 443 },
];

function Portfolio() {
  return (
    <Section spacing="default" id="proyectos" className="bg-stone-50">
      <Container>
        <Heading
          as="h2"
          badge={<Badge>Proyectos</Badge>}
          title="Un ejemplo de lo que podemos construir para tu negocio."
          description="Café Aurora llegó buscando más reservas y una imagen más profesional en internet. Esto es lo que diseñamos para ellos."
          align="center"
        />

        <Card className="mt-16 overflow-hidden transition-shadow duration-300 hover:shadow-lg">
          <img
            src={coffeeHero}
            alt="Página web de Café Aurora"
            className="h-72 w-full object-cover md:h-96"
            width={1535}
            height={1024}
            loading="lazy"
            decoding="async"
          />

          <div className="grid gap-10 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-stone-900">
                Café Aurora
              </h3>
              <p className="mt-3 max-w-xl leading-7 text-stone-600">
                Diseñamos una página moderna que muestra su menú, ubicación y
                permite reservar mesa en segundos, ayudándolos a atraer más
                clientes desde el primer día.
              </p>
            </div>

            <div className="flex gap-8">
              {highlights.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 border-t border-stone-200">
            {gallery.map((item) => (
              <img
                key={item.alt}
                src={item.image}
                alt={item.alt}
                className="h-32 w-full object-cover md:h-44"
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </Card>
      </Container>
    </Section>
  );
}

export default Portfolio;
