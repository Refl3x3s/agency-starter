import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import AccentStroke from "../components/ui/AccentStroke";
import { whatsappLink, mailtoLink } from "../data/contact";

function CTA() {
  return (
    <Section
      spacing="default"
      id="contacto"
      className="relative overflow-hidden bg-neutral-950"
    >
      <AccentStroke className="text-blue-500" opacity={0.25} />

      <Container>
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            ¿Listo para hacer crecer tu negocio en internet?
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-neutral-300">
            Agenda una asesoría gratuita y sin compromiso. Cuéntanos sobre tu
            negocio y te diremos cómo podemos ayudarte.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agenda una asesoría gratuita por WhatsApp (se abre en una pestaña nueva)"
            >
              Agenda una asesoría gratuita
            </Button>

            <Button
              variant="outline"
              href={mailtoLink}
              aria-label="Escríbenos por correo electrónico"
            >
              Escríbenos por correo
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default CTA;
