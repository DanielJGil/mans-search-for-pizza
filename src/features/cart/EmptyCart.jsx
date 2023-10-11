import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="p-4">
      <Button type="back" to="/menu">
        &larr; Back to menu
      </Button>

      <p className="mt-7 font-semibold">
        Your cart is empty. Start adding some pizzas.
      </p>
    </div>
  );
}

export default EmptyCart;
