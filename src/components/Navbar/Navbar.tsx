import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

type NavItem = {
  label: string;
  path: string;
};

type Props = {
  logo: string;
  items: NavItem[];
  burger: string;
  close: string; 
};

const Navbar = ({ logo, items, burger, close }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          </li>
        ))}

        <button className="login-mobile" onClick={closeMenu}>
           <NavLink to="#">Login</NavLink>
        </button>
      </ul>

      <button className="login-desktop">
        <NavLink to="#">Login</NavLink>
      </button>

      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={isOpen ? close : burger} alt="Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
