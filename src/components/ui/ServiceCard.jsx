function ServiceCard({
    number,
    title,
    description,
  }) {
    return (
      <article
        className="
          rounded-2xl
          border
          border-stone-200
          bg-white
          p-8
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-200
          hover:shadow-lg
        "
      >
        <p className="text-sm font-medium text-blue-600">
          {number}
        </p>
  
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900">
          {title}
        </h3>
  
        <p className="mt-4 leading-7 text-stone-600">
          {description}
        </p>
      </article>
    );
  }
  
  export default ServiceCard;