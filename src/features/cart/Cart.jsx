import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const name = useSelector((state) => state.user.username);

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="p-4">
      <Button onClick={() => navigate(-1)} type="back">
        &larr; Back to menu
      </Button>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {name}</h2>

      <ul className="mb-9 divide-y divide-stone-200 border-b pt-4">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="flex space-x-4">
        <Button to="/order/new" type="primary">
          Order Pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} type="clear">
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
