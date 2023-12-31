import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between gap-3 bg-orange-400 px-6 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Man's Search For Pizza
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
