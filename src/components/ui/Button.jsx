import { Link } from "react-router-dom";

function Button({
  children,
  variant = "primary",
  href,
  to,
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-black text-white hover:bg-blue-700",

    secondary:
      "border border-gray-300 bg-white text-black hover:bg-gray-100 hover:border-blue-300 hover:text-blue-700",

    outline:
      "border border-neutral-700 bg-transparent text-white hover:border-neutral-500 hover:bg-white/10",
  };

  const classes = `
    inline-flex items-center justify-center
    whitespace-nowrap
    rounded-xl
    px-5 py-3 text-sm
    md:px-8 md:py-4 md:text-base
    font-medium
    transition-all
    duration-300
    hover:scale-105
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
    ${variants[variant]}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;