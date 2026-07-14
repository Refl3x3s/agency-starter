function Button({
  children,
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-black text-white hover:bg-blue-700",

    secondary:
      "border border-gray-300 bg-white text-black hover:bg-gray-100 hover:border-blue-300 hover:text-blue-700",
  };

  return (
    <button
      className={`
        rounded-xl
        px-8
        py-4
        font-medium
        transition-all
        duration-300
        hover:scale-105
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;