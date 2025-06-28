import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
