import { Link } from "react-router-dom";

function Button({ children, to, type, onClick }) {
  const base =
    "rounded-full bg-orange-400 font-semibold tracking-wide focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2 hover:bg-orange-300 transition-colors duration-300";

  const styles = {
    primary: base + " px-4 py-3 text-sm uppercase md:px-5 md:py-4",
    small: base + " px-4 py-2 text-xs uppercase md:px-5 md:py-2.5",
    back: "text-sm text-blue-500 hover:text-blue-600 hover:underline",
    clear:
      "rounded-full border-2 border-stone-300 px-4 py-2.5 uppercase font-semibold text-sm tracking-wide transition-colors duration-300 hover:bg-stone-300  focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
