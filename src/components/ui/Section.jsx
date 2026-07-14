function Section({
  as: Component = "section",
  children,
  spacing = "default",
  className = "",
  ...props
}) {
  const spacingClasses = {
    compact: "py-16",
    default: "py-24",
    spacious: "py-32",
  };

  return (
    <Component
      className={`${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Section;