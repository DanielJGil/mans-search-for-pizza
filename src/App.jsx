import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
