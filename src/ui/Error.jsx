import { useRouteError } from "react-router-dom";
import Button from "./Button";

function Error() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="mb-5 text-xl font-semibold">Something went wrong</h1>
      <p className="mb-5">{error.data || error.message}</p>

      <Button type="back" to="-1">
        &larr; Go back
      </Button>
    </div>
  );
}

export default Error;
