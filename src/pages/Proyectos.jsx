import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Badge from "../components/ui/Badge";
import ProjectCard from "../components/ui/ProjectCard";
import portfolio from "../data/portfolio";

function Proyectos() {
  return (
    <Section spacing="spacious" className="bg-stone-50">
      <Container>
        <Heading
          as="h1"
          badge={<Badge>Portafolio completo</Badge>}
          title="Nuestros proyectos."
          description="Estos son los sitios que hemos diseñado para nuestros clientes. Cada uno se construye a la medida del negocio, su marca y sus objetivos."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {portfolio.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Proyectos;
