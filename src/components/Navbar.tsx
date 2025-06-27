import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <button className="btn btn-primary">Primary</button>
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <a className=" text-xl">Premium Shop</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        {user && (
          <>
            <button className="mr-4">
              <Link to={"/dashboard"}>Dashboard</Link>
            </button>
            <button
              onClick={handleLogout}
              className="btn btn-sm mr-4 bg-red-500 text-white"
            >
              LogOut
            </button>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
