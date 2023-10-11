import Button from "../../ui/Button";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { name, totalPrice, quantity, id } = item;

  return (
    <li className="items-center justify-between space-y-3 py-4 sm:flex">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between space-x-4 ">
        <p className="text-sm font-bold">€{totalPrice}.00</p>
        <UpdateItemQuantity quantity={quantity} id={id} />
        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
