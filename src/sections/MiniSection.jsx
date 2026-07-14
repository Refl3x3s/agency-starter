import MiniCard from "../components/ui/MiniCard";
import espresso from "../assets/images/portfolio/coffee-espresso.png";
import latte from "../assets/images/portfolio/coffee-latte.png";
import cheesecake from "../assets/images/portfolio/coffee-cheesecake2.png";

// Imágenes temporales (por ahora usamos la misma)
import coffeeHero from "../assets/images/portfolio/coffee-hero.png";

function MiniSection() {
  const items = [
    {
      image: espresso,
      title: "Espresso",
    },
    {
      image: latte,
      title: "Latte",
    },
    {
      image: cheesecake,
      title: "Cheesecake",
    },
  ];

  return (
    <section className="mt-10">

      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        Destacados
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <MiniCard
            key={item.title}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>

    </section>
  );
}

export default MiniSection;