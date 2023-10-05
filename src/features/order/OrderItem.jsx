function OrderItem({ item }) {
  const { name, totalPrice, quantity } = item;

  return (
    <li className="flex items-center justify-between py-4 text-sm">
      <p>
        <span className="font-semibold">{quantity}&times;</span> {name}
      </p>
      <p className="text-sm font-bold">€{totalPrice}.00</p>
    </li>
  );
}

export default OrderItem;
