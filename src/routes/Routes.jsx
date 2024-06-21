import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import Home from "../components/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Registration/>
        },
      ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            },
            {
                path: "dashboard/all-products",
                element: <PrivateRoute>
                    <AllProducts/>
                </PrivateRoute>
            },
            {
                path: "dashboard/add-product",
                element: <PrivateRoute>
                    <AddProduct/>
                </PrivateRoute>
            },
        ]
    }
  ]);