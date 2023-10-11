import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  const emptyCart = totalCartQuantity === 0;

  if (emptyCart) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-6 py-4 text-sm uppercase text-stone-200">
      <div className="flex space-x-6">
        <p>{totalCartQuantity} Pizzas</p>
        <p>${totalCartPrice}.00</p>
      </div>
      <Button to="/cart" className="text-sm uppercase">
        Open cart &rarr;
      </Button>
    </div>
  );
}

export default CartOverview;
