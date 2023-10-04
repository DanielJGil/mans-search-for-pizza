function CartItem({ item }) {
  const { name, totalPrice, quantity } = item;
  console.log(item);

  return (
    <li className="flex items-center justify-between py-4">
      <p>
        {quantity}&times; {name}
      </p>
      <p className="text-sm font-bold">€{totalPrice}.00</p>
    </li>
  );
}

export default CartItem;
