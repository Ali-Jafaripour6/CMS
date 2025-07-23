import Home from "../pages/Home/Home";
import Userlist from "../pages/Users/Userlist";
import Newuser from "../pages/newUser/Newuser";
import Products from "../pages/products/Products";
import Product from "../pages/product/Product";


let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Userlist /> },
  { path: "/newuser", element: <Newuser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:id", element: <Product /> },
];

export default routes;
