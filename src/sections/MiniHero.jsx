import Button from "../components/ui/Button";
import coffeeHero from "../assets/images/portfolio/coffee-hero.png";

function MiniHero({
  title = "Café Aurora",
  description = "El mejor café artesanal de la ciudad.",
  button = "Reservar mesa",
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white pb-6">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />

      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl" />

      {/* Navbar */}
      <div className="relative flex items-center justify-between border-b border-neutral-100 px-5 py-3">

        <div className="font-semibold text-neutral-800">
          {title}
        </div>

        <div className="flex gap-4 text-xs text-neutral-500">
          <span>Inicio</span>
          <span>Menú</span>
          <span>Contacto</span>
        </div>

      </div>

      {/* Hero */}
      <div className="relative grid grid-cols-[0.9fr_1.1fr] items-center gap-8 px-6 py-8">

        {/* Texto */}
        <div>

          <h3 className="text-lg font-bold leading-tight text-neutral-900">
            {title}
          </h3>

          <p className="mt-3 text-xs leading-5 text-neutral-600">
            {description}
          </p>

          <div className="mt-5 scale-90 origin-left">
            <Button>
              {button}
            </Button>
          </div>

        </div>

        {/* Imagen simulada */}
{/* Right Side */}
<div className="relative flex items-center justify-center">

  <img
    src={coffeeHero}
    alt="Café Aurora"
    className="h-56 w-full rounded-2xl object-cover shadow-xl"
  />

</div>

      </div>

    </div>
  );
}

export default MiniHero;