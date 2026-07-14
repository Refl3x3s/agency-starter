function Heading({
    as: Component = "h2",
    title,
    description,
    badge,
    align = "left",
    className = "",
  }) {
    const alignClasses = {
      left: "items-start text-left",
      center: "items-center text-center",
    };
  
    const headingClasses = {
      h1: "text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl lg:text-6xl",
      h2: "text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl",
      h3: "text-2xl font-semibold tracking-tight text-neutral-900",
      h4: "text-xl font-semibold tracking-tight text-neutral-900",
      h5: "text-lg font-semibold tracking-tight text-neutral-900",
      h6: "text-base font-semibold tracking-tight text-neutral-900",
    };
  
    return (
      <div
        className={`flex flex-col gap-5 ${alignClasses[align]} ${className}`}
      >
        {badge}
  
        <Component className={headingClasses[Component]}>
          {title}
        </Component>
  
        {description && (
          <p className="max-w-xl text-lg leading-relaxed text-neutral-600">
            {description}
          </p>
        )}
      </div>
    );
  }
  
  export default Heading;