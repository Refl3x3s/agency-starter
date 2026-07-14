import Card from "../components/ui/Card";
import MiniHero from "./MiniHero";
import MiniSection from "./MiniSection";

function MockupCard({
  business = "Café Aurora",
  description = "El mejor café artesanal de la ciudad.",
  button = "Reservar mesa",
}) {
  return (
    <Card className="w-full overflow-hidden shadow-xl">

      {/* Browser */}
      <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-5 py-4">

        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>

        <div className="ml-4 flex-1 rounded-full border border-neutral-200 bg-white px-4 py-1 text-center text-xs text-neutral-400">
          abrildigital.co
        </div>

      </div>

      {/* Website */}
      <div className="p-7">

        <MiniHero
          title={business}
          description={description}
          button={button}
        />

        <MiniSection />

      </div>

    </Card>
  );
}

export default MockupCard;