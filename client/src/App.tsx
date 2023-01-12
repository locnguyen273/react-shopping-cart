import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";

function App() {
  const user = true;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/:category",
      element: <ProductList />,
    },
    {
      path: "/products/:id",
      element: <Product />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "/login",
      element: <>{user ? <Navigate to="/" replace={true} /> : <Login />}</>,
    },
    {
      path: "/register",
      element: <>{user ? <Navigate to="/" replace={true} /> : <Register />}</>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
