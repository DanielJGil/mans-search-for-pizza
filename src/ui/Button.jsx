import { Link } from "react-router-dom";

function Button({ children, to, className }) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default Button;
