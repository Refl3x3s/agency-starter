import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Badge from "../components/ui/Badge";
import process from "../data/process";

function Process() {
  return (
    <Section spacing="default" id="proceso" className="bg-white">
      <Container>
        <Heading
          as="h2"
          badge={<Badge>Proceso</Badge>}
          title="Así trabajamos, de principio a fin."
          description="Un proceso simple y transparente para que sepas exactamente qué esperar en cada etapa."
          align="center"
        />

        <ol className="relative mt-20 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          {process.map((step, index) => {
            const isLast = index === process.length - 1;

            return (
              <li
                key={step.id}
                className="relative flex gap-6 lg:flex-1 lg:flex-col lg:items-center lg:gap-0 lg:px-4 lg:text-center"
              >
                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute left-6 top-12 -bottom-12 w-px bg-stone-200 lg:hidden"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-6 hidden h-px w-full bg-stone-200 lg:block"
                    />
                  </>
                )}

                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {step.number}
                </div>

                <div className="lg:mt-6">
                  <h3 className="text-xl font-semibold tracking-tight text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-stone-600">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}

export default Process;
