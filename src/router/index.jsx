import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClothesStore } from "../features/clothesStore";
import { ClothesDetail } from "../features/clothesDetail";
import { About } from "../features/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClothesStore />,
    errorElement: <div>Error page...</div>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/detail/:id",
    element: <ClothesDetail />,
  },
]);
const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;
export { CustomRouter };
