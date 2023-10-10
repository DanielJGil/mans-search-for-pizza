import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

import Button from "../../ui/Button";

function MenuItem({ item }) {
  const { imageUrl, name, ingredients, unitPrice, soldOut } = item;
  const dispatch = useDispatch();

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
            <p className="text-sm">€{unitPrice}.00</p>
          )}

          {!soldOut && (
            <Button onClick={() => dispatch(addItem(item))} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
