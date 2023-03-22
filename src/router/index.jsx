import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClothesStore } from "../features/clothesStore";
import { ClothesDetail } from "../features/clothesDetail";

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
  {
    path: "/detail/:id",
    element: <ClothesDetail />,
  },
]);
const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;
export { CustomRouter };
