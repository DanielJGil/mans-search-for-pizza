import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

import Button from "../../ui/Button";

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(id))} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
