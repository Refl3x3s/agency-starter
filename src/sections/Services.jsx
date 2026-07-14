import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import ServiceCard from "../components/ui/ServiceCard";
import Badge from "../components/ui/Badge";
import services from "../data/services";

function Services() {
  return (
    <Section
      spacing="default"
      id="servicios"
      className="bg-white"
    >
      <Container>

        <Heading
          as="h2"
          badge={
            <Badge>
              Servicios
              </Badge>
          }
          title="Todo lo que tu negocio necesita para crecer en internet."
          description="Nos encargamos del diseño, mantenimiento y posicionamiento de tu sitio para que tú puedas concentrarte en hacer crecer tu negocio."
          align="center"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}

export default Services;