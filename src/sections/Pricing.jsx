import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import pricing from "../data/pricing";
import { whatsappLink, buildWhatsappLink } from "../data/contact";

function Pricing() {
  return (
    <Section spacing="default" id="precios" className="bg-stone-50">
      <Container>
        <Heading
          as="h2"
          badge={<Badge>Precios</Badge>}
          title="Elige la forma que mejor se adapte a tu negocio"
          description="No todos los negocios tienen las mismas necesidades. Por eso ofrecemos tres formas de empezar."
          align="center"
        />

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

              <ul className="mt-6 flex flex-col gap-3 border-t border-stone-100 pt-6">
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
