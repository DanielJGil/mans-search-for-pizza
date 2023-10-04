import Button from "../../ui/Button";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 px-6 py-4 text-sm uppercase text-stone-200">
      <div className="flex space-x-6">
        <p>2 Pizzas</p>
        <p>$23.45</p>
      </div>
      <Button to="/cart" className="text-sm uppercase">
        Open cart
      </Button>
    </div>
  );
}

export default CartOverview;
