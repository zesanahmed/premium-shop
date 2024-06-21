import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 bg-gray-400 min-h-screen p-6">
                <nav className="flex flex-col gap-2 font-bold text-white">
                <NavLink to={""}
                 className={({ isActive }) =>
                    ` text-gray-100 p-2 rounded ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`
                  }>Dashboard</NavLink>
                <NavLink to={"/"} 
                 className={({ isActive }) =>
                    `p-2 rounded ${isActive ? 'bg-gray-700-600' : 'hover:bg-gray-800'}`
                  }>Home</NavLink>
                <NavLink to={"dashboard/all-products"} 
                 className={({ isActive }) =>
                    `p-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-800'}`
                  }>All Products</NavLink>
                <NavLink to={"dashboard/add-product"} 
                 className={({ isActive }) =>
                    `p-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
                  }>Add Product</NavLink>
                </nav>
            </div>
            <div className="col-span-10 p-10">
            <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;