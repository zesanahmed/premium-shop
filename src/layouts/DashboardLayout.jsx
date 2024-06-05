import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 bg-gray-300 min-h-screen p-6">
                <ul className="flex flex-col gap-2">
                <li><NavLink to={""} className="btn ">Dashboard</NavLink></li>
                <li><NavLink to={"/"} className="btn ">Home</NavLink></li>
                <li><NavLink to={"dashboard/all-products"} className="btn">All Products</NavLink></li>
                <li><NavLink to={"dashboard/add-product"} className="btn">Add Product</NavLink></li>
                </ul>
            </div>
            <div className="col-span-10 p-10">
            <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;