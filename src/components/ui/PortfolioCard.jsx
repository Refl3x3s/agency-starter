function PortfolioCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      aria-label={`Ver el proyecto de ${project.name} (se abre en una pestaña nueva)`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={project.heroImage}
          alt={project.heroAlt}
          width={project.heroWidth}
          height={project.heroHeight}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="truncate text-base font-semibold text-stone-900">
            {project.name}
            <span className="ml-2 text-sm font-normal text-stone-400">
              {project.type}
            </span>
          </h3>

          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-blue-600 transition-transform duration-300 group-hover:translate-x-0.5">
            Ver proyecto
            <span aria-hidden="true">→</span>
          </span>
        </div>

        <p className="mt-1 truncate text-sm text-stone-600">{project.tagline}</p>
      </div>
    </a>
  );
}

export default PortfolioCard;
