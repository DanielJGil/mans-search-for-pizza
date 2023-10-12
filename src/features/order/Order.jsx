import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(function () {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, []);

  const {
    id,
    estimatedDelivery,
    orderPrice,
    priorityPrice,
    cart,
    priority,
    status,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-4 ">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>
        <div className="flex gap-3 text-sm font-semibold">
          {priority && (
            <p className="rounded-full bg-red-500 px-3 py-1 uppercase text-stone-100">
              Priority
            </p>
          )}
          <p className="rounded-full bg-green-500 px-3 py-1 uppercase text-stone-100">
            {status} order
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 bg-stone-200 px-6 py-5">
        <p className="font-semibold">
          {deliveryIn > 0
            ? `Order will arrive in ${calcMinutesLeft(
                estimatedDelivery,
              )} minutes`
            : "Order should have arrived"}
        </p>
        <p className="text-xs">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="my-9 divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            ingredients={
              fetcher.data?.find((el) => el.id === item.pizzaId).ingredients
            }
            isLoadingIngredients={fetcher.state === "loading"}
          />
        ))}
      </ul>

      <div className=" mb-8 space-y-2 bg-stone-200 p-6">
        <p className="text-sm font-medium">
          Pizza price: {formatCurrency(orderPrice)}
        </p>
        <p className="text-sm font-medium">
          Priority price: {formatCurrency(priorityPrice)}
        </p>
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const data = await getOrder(params.orderId);
  return data;
}

export default Order;
