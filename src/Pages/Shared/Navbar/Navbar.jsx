import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT US</Link>
      </li>
      <li>
        <Link to="/dashboard">DASHBOARD</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/order/salad">ORDER</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="flex items-center">
            <FaCartPlus className="mr-2"></FaCartPlus>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogout} className="btn-ghost">
            LOGOUT
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 text-white bg-base-100 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl uppercase">Bistro-Restaurant</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-outline btn-circle avatar">
          <div className="w-10 h-10 rounded-full">
          <Link to='/dashboard'>  {user && <img src={user.photoURL} alt="" />}</Link>
          </div>
        </label>
        {/* <a className="btn">Image</a> */}
      </div>

    </div>
  );
};

export default Navbar;
