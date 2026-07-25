import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-[#7A4E2D] text-white hover:bg-[#603b21]",

  whatsapp:
    "bg-green-600 text-white hover:bg-green-700",

  outline:
    "border border-[#7A4E2D] text-[#7A4E2D] hover:bg-[#7A4E2D] hover:text-white",
};

const Button = ({
  children,
  variant = "primary",
  to,
  href,
  className = "",
}) => {
  const classes = `inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition duration-300 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
};

export default Button;