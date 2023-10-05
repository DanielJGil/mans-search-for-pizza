import Button from "../../ui/Button";
import FormInput from "../../ui/FormInput";

function CreateOrder() {
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <form className="space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="name" className="sm:basis-40">
            First Name
          </label>
          <FormInput id="name" />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="number" className="sm:basis-40">
            Phone Number
          </label>
          <FormInput id="number" />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="address" className="sm:basis-40">
            Address
          </label>
          <FormInput id="address" />
        </div>

        <div className="flex items-center space-x-5">
          <input
            type="checkbox"
            id="checkbox"
            className="h-6 w-6 accent-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2"
          />
          <label htmlFor="checkbox" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div className="pt-8">
          <Button type="primary">Order now</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
