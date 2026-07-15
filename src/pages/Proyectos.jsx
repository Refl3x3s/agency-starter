import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Badge from "../components/ui/Badge";
import PortfolioCard from "../components/ui/PortfolioCard";
import portfolio from "../data/portfolio";

function Proyectos() {
  return (
    <Section spacing="spacious" className="bg-stone-50">
      <Container>
        <Heading
          as="h1"
          badge={<Badge>Portafolio completo</Badge>}
          title="Nuestros proyectos."
          description="Cada tarjeta es una puerta de entrada a un proyecto real. Explora el que te interese."
          align="center"
        />

        <div className="mt-16 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-8 gap-y-12">
          {portfolio.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Proyectos;
