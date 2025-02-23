import { Link, NavLink } from "react-router";

function Header() {
  return (
    <div className="flex justify-between p-10 bg-slate-500 text-white">
      <Link to={"/"}>E-Commerce</Link>

      <div className="flex gap-8">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Products
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
