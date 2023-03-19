import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClothesStore } from "../features/clothesStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClothesStore />,
    errorElement: <div>Error page...</div>,
  },
  {
    path: "/about",
    element: <div>About page</div>,
  },
]);
const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;
export { CustomRouter };
