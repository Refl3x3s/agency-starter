import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <Section spacing="default" className="bg-stone-50">
      <Container>
        <Heading
          as="h2"
          badge={<Badge>Testimonios</Badge>}
          title="Negocios que ya confiaron en nosotros."
          description="Esto es lo que dicen los dueños de negocio con los que hemos trabajado."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="flex-1 leading-7 text-stone-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-stone-100 pt-4">
                <p className="font-semibold text-stone-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-stone-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Testimonials;
