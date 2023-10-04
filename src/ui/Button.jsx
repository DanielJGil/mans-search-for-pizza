import { Link } from "react-router-dom";

function Button({ children, to, type }) {
  const base =
    "rounded-full bg-orange-400 font-semibold tracking-wide focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2";

  const styles = {
    primary: base + " px-4 py-3 text-sm uppercase md:px-5 md:py-4",
    small: base + " px-4 py-2 text-xs uppercase md:px-5 md:py-2.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
