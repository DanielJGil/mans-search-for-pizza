import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { name, totalPrice, quantity, pizzaId } = item;

  return (
    <li className="items-center justify-between space-y-3 py-4 sm:flex">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between space-x-4 ">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity quantity={quantity} id={pizzaId} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
