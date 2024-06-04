import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 bg-gray-300 min-h-screen p-6">
                <ul className="flex flex-col gap-2">
                <li><NavLink to={""} className="btn min-w-10">Dashboard</NavLink></li>
                <li><NavLink className="btn">All Products</NavLink></li>
                <li><NavLink to={"/"} className="btn">Home</NavLink></li>
                </ul>
            </div>
            <div className="cos-span-10 p-10">
            <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;