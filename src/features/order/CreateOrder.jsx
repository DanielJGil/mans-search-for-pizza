import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import FormInput from "../../ui/FormInput";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import { createOrder } from "../../services/apiRestaurant";
import { isValidPhone } from "../../utils/helpers";

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  const cart = useSelector(getCart);

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" className="space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="name" className="sm:basis-40">
            First Name
          </label>
          <FormInput id="customer" name="customer" />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="phone" className="sm:basis-40">
            Phone Number
          </label>
          <div className="flex grow flex-col">
            <FormInput id="phone" name="phone" />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="address" className="sm:basis-40">
            Address
          </label>
          <FormInput id="address" name="address" />
        </div>

        <div className="flex items-center space-x-5">
          <input
            type="checkbox"
            id="checkbox"
            name="priority"
            className="h-6 w-6 accent-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2"
          />
          <label htmlFor="checkbox" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div className="pt-8">
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please give us your correct phone number.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
