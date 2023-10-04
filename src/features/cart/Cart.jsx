import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const navigate = useNavigate();
  const cart = fakeCart;

  return (
    <div className="p-4">
      <Button onClick={() => navigate(-1)} type="back">
        &larr; Back to menu
      </Button>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="mb-9 divide-y divide-stone-200 border-b pt-4">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="flex space-x-4">
        <Button type="primary">Order Pizzas</Button>
        <Button type="clear">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
