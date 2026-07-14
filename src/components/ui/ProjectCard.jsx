import Card from "./Card";

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <img
        src={project.heroImage}
        alt={project.heroAlt}
        className="h-72 w-full object-cover md:h-96"
        width={project.heroWidth}
        height={project.heroHeight}
        loading="lazy"
        decoding="async"
      />

      <div className="grid gap-10 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-stone-900">
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl leading-7 text-stone-600">
            {project.description}
          </p>
        </div>

        <div className="flex gap-8">
          {project.highlights.map((item) => (
            <div key={item.label} className="text-center">
              <p className="whitespace-nowrap text-2xl font-bold text-blue-600">
                {item.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 border-t border-stone-200">
        {project.gallery.map((item) => (
          <img
            key={item.alt}
            src={item.image}
            alt={item.alt}
            className="h-32 w-full object-cover md:h-44"
            width={item.width}
            height={item.height}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </Card>
  );
}

export default ProjectCard;
