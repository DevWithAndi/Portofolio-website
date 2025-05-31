import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const NavItem = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/work",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const location = useLocation();
  return (
    <nav className="flex items-center">
      <div className="my-2 ml-4 flex w-auto items-start justify-start">
        <img
          src="src/assets/Logo.svg"
          alt="logo"
          className="h-[30px] w-[30px]"
        />
      </div>
      <div className="flex flex-1 justify-end">
        <ul className="mr-2 flex h-fit items-center justify-end gap-2 rounded-full p-2">
          {NavItem.map((item, index) => (
            <li
              key={index}
              className={`rounded-full px-4 py-2 transition-colors duration-200 ${location.pathname === item.path || (item.path === "/about" && location.pathname === "/") ? "bg-[#193373]" : "hover:bg-[#070f22]"}`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
