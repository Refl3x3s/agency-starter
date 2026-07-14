import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import IncludedItem from "../components/ui/IncludedItem";
import pricing from "../data/pricing";
import included from "../data/included";
import { whatsappLink, buildWhatsappLink } from "../data/contact";

function Pricing() {
  return (
    <Section spacing="default" id="precios" className="bg-stone-50">
      <Container>
        <Heading
          as="h2"
          badge={<Badge>Precios</Badge>}
          title="Elige la forma que mejor se adapte a tu negocio"
          description="No vendemos solo una página web: nos encargamos de tu presencia digital completa, para que tú te concentres en tu negocio."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-blue-100 bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <Badge>Todo incluido</Badge>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">
              Esto va incluido en cada plan, sin letra pequeña
            </h3>
            <p className="max-w-xl leading-7 text-stone-600">
              Nos encargamos de toda la parte técnica: diseño, alojamiento,
              seguridad y mantenimiento continuo.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <IncludedItem key={item} title={item} />
            ))}
          </ul>
        </div>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-3">
          {pricing.map((plan) => (
            <Card
              key={plan.id}
              className={`flex h-full flex-col p-8 transition-all duration-300 ${
                plan.recommended
                  ? "ring-2 ring-blue-600 lg:-translate-y-3"
                  : "hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              {plan.recommended && (
                <Badge className="self-start">Recomendado</Badge>
              )}

              <h3
                className={`text-2xl font-semibold tracking-tight text-stone-900 ${
                  plan.recommended ? "mt-4" : ""
                }`}
              >
                {plan.title}
              </h3>

              <div className="mt-4">
                {plan.priceLabel && (
                  <p className="text-sm font-medium text-stone-500">
                    {plan.priceLabel}
                  </p>
                )}
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="whitespace-nowrap text-4xl font-bold text-stone-900">
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span className="whitespace-nowrap text-base font-medium text-stone-500">
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>
              </div>

              {plan.note && (
                <p className="mt-2 text-sm text-stone-500">{plan.note}</p>
              )}

              <p className="mt-4 leading-7 text-stone-600">
                {plan.description}
              </p>

              <p className="mt-6 border-t border-stone-100 pt-6 text-xs font-semibold uppercase tracking-wide text-stone-400">
                Además de todo lo esencial
              </p>

              <ul className="mt-3 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 font-semibold text-blue-600">
                      ✓
                    </span>
                    <span className="text-stone-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Button
                  href={buildWhatsappLink(plan.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={plan.recommended ? "primary" : "secondary"}
                  className="w-full"
                  aria-label={`${plan.ctaLabel}: ${plan.title} por WhatsApp (se abre en una pestaña nueva)`}
                >
                  {plan.ctaLabel}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-xl flex-col items-center gap-4 text-center">
          <h3 className="text-xl font-semibold tracking-tight text-stone-900">
            ¿No estás seguro de cuál opción elegir?
          </h3>

          <p className="leading-7 text-stone-600">
            Agenda una consulta gratuita y te ayudaremos a encontrar la mejor
            alternativa para tu negocio.
          </p>

          <div className="mt-2">
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
      </Container>
    </Section>
  );
}

export default Pricing;
