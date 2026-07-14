import MiniCard from "../components/ui/MiniCard";
import espresso from "../assets/images/portfolio/coffee-espresso.avif";
import latte from "../assets/images/portfolio/coffee-latte.avif";
import cheesecake from "../assets/images/portfolio/coffee-cheesecake2.avif";

function MiniSection() {
  const items = [
    {
      image: espresso,
      title: "Espresso",
      width: 500,
      height: 750,
    },
    {
      image: latte,
      title: "Latte",
      width: 500,
      height: 333,
    },
    {
      image: cheesecake,
      title: "Cheesecake",
      width: 500,
      height: 333,
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
            width={item.width}
            height={item.height}
          />
        ))}
      </div>

    </section>
  );
}

export default MiniSection;