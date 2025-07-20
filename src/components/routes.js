import Home from "../pages/Home/Home";
import Userlist from "../pages/Users/Userlist";
import Newuser from "../pages/newUser/Newuser";
import Products from "../pages/products/Products";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Userlist /> },
  { path: "/newuser", element: <Newuser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
