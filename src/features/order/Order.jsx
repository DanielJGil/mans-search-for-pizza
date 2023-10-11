import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import { formatDate } from "../../utils/helpers";

function Order() {
  const order = useLoaderData();

  const { id, estimatedDelivery, orderPrice, priorityPrice, cart } = order;

  return (
    <div className="px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-4 ">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>
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
        <p className="text-xs">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="my-9 divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className=" space-y-2 bg-stone-200 p-6">
        <p className="text-sm font-medium">Pizza price: ${orderPrice}.00</p>
        <p className="text-sm font-medium">
          Priority price: ${priorityPrice}.00
        </p>
        <p className="font-semibold">
          To pay on delivery: ${orderPrice + priorityPrice}.00
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const data = await getOrder(params.orderId);
  return data;
}

export default Order;
