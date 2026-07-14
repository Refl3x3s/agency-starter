import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import MockupCard from "./MockupCard";
import AccentStroke from "../components/ui/AccentStroke";
import { whatsappLink } from "../data/contact";

function Hero() {
  return (
    <Section
      spacing="default"
      className="relative overflow-hidden bg-stone-50"
    >
      <AccentStroke
        className="text-blue-600"
        opacity={0.12}
      />

      <Container>
        <div className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Columna izquierda */}
            <div>
              <Heading
                as="h1"
                badge={
                  <Badge>
                    Especialistas en pequeños negocios
                  </Badge>
                }
                title="Consigue más clientes con una página web que trabaja para tu negocio."
                description="Diseñamos páginas web modernas, rápidas y optimizadas para ayudar a pequeños negocios a conseguir más clientes."
              />

              <div className="mt-10">
                <Button
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hablemos de tu negocio por WhatsApp (se abre en una pestaña nueva)"
                >
                  Hablemos de tu negocio
                </Button>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="flex flex-col items-center gap-4">

              <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                Así podría verse tu negocio
              </p>

              <MockupCard
                business="Café Aurora"
                description="Café artesanal con granos seleccionados."
                button="Reservar mesa"
              />

            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;