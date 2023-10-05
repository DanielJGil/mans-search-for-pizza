import OrderItem from "./OrderItem";

const fakeOrder = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
    id: 1,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
    id: 2,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
    id: 3,
  },
];

function Order() {
  return (
    <div className="px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-4 ">
        <h2 className="text-xl font-semibold">Order %ORDER#% status</h2>
        <div className="flex gap-3 text-sm font-semibold">
          <p className="rounded-full bg-red-500 px-3 py-1 uppercase text-stone-100">
            Priority
          </p>
          <p className="rounded-full bg-green-500 px-3 py-1 uppercase text-stone-100">
            Preparing order
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 bg-stone-200 px-6 py-5">
        <p className="font-semibold">Order should have arrived</p>
        <p className="text-xs">(Estimated delivery: Apr 25, 09:42 AM)</p>
      </div>

      <ul className="my-9 divide-y divide-stone-200 border-b border-t">
        {fakeOrder.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <div className=" space-y-2 bg-stone-200 p-6">
        <p className="text-sm font-medium">Pizza price: $147.00</p>
        <p className="text-sm font-medium">Priority price: $29:00</p>
        <p className="font-semibold">To pay on delivery: $176.00</p>
      </div>
    </div>
  );
}

export default Order;
