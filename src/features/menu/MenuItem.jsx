import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";

import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ item }) {
  const { imageUrl, name, ingredients, unitPrice, soldOut, id } = item;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut && "opacity-70 grayscale"}`}
        src={imageUrl}
        alt={name}
      />
      <div className="py-0.3 flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {soldOut ? (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          ) : (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart} type="small">
              Add to cart
            </Button>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity id={id} quantity={currentQuantity} />
              <DeleteItem id={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
