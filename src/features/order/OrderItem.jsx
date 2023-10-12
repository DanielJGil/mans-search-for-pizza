function OrderItem({ item, ingredients, isLoadingIngredients }) {
  const { name, totalPrice, quantity } = item;

  return (
    <li className="space-y-1 py-4">
      <div className="flex items-center justify-between text-sm">
        <p>
          <span className="font-semibold">{quantity}&times;</span> {name}
        </p>
        <p className="text-sm font-bold">€{totalPrice}.00</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
