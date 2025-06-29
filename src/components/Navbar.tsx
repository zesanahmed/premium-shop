import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { logOut, user } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="sticky top-0 z-50 bg-primary text-white shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            PremiumShop
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/brandPage">Brand</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
              </>
            )}
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 bg-base-100 text-black w-52">
                  <li>
                    <Link to="/category/electronics">Electronics</Link>
                  </li>
                  <li>
                    <Link to="/category/fashion">Fashion</Link>
                  </li>
                  <li>
                    <Link to="/category/home-living">Home & Living</Link>
                  </li>
                  <li>
                    <Link to="/category/beauty-personal-care">
                      Beauty & Personal Care
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/food-groceries">Food & Groceries</Link>
                  </li>
                  <li>
                    <Link to="/category/entertainment-gaming">
                      Entertainment & Gaming
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/sports-fitness">Sports & Fitness</Link>
                  </li>
                  <li>
                    <Link to="/category/books-stationery">
                      Books & Stationery
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/jewelry-accessories">
                      Jewelry & Accessories
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/automobiles">Automobiles</Link>
                  </li>
                </ul>
              </details>
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
              <button
                onClick={handleLogout}
                className="btn btn-sm mr-4 bg-primary text-white"
              >
                LogOut
              </button>
            )}
          </ul>
        </div>

        {/* Right: Search + Cart + Profile */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-40 md:w-60 text-black pr-12"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary z-10"
            >
              <FaSearch />
            </button>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="btn btn-ghost btn-circle text-white">
            <FaShoppingCart size={20} />
          </Link>

          {/* Profile Image */}
          {user && (
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img
                src="https://i.pravatar.cc/100?img=3"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/brandPage">Brand</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 bg-base-100 text-black w-52">
                  <li>
                    <Link to="/category/electronics">Electronics</Link>
                  </li>
                  <li>
                    <Link to="/category/fashion">Fashion</Link>
                  </li>
                  <li>
                    <Link to="/category/home-living">Home & Living</Link>
                  </li>
                  <li>
                    <Link to="/category/beauty-personal-care">
                      Beauty & Personal Care
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/food-groceries">Food & Groceries</Link>
                  </li>
                  <li>
                    <Link to="/category/entertainment-gaming">
                      Entertainment & Gaming
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/sports-fitness">Sports & Fitness</Link>
                  </li>
                  <li>
                    <Link to="/category/books-stationery">
                      Books & Stationery
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/jewelry-accessories">
                      Jewelry & Accessories
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/automobiles">Automobiles</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
