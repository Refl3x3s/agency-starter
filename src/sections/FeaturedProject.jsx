import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import ProjectCard from "../components/ui/ProjectCard";
import portfolio from "../data/portfolio";

function FeaturedProject() {
  const featured = portfolio.find((project) => project.featured) ?? portfolio[0];

  return (
    <Section spacing="default" id="proyecto-destacado" className="bg-stone-50">
      <Container>
        <Heading
          as="h2"
          badge={<Badge>Proyecto destacado</Badge>}
          title="Ejemplo de lo que podemos construir para tu negocio."
          description="Cada negocio es distinto, así que cada página también lo es. Este es uno de los sitios que hemos diseñado para nuestros clientes."
          align="center"
        />

        <div className="mt-16">
          <ProjectCard project={featured} />
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/proyectos" variant="secondary">
            Ver todos nuestros proyectos
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedProject;
