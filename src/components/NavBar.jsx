import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="relative" id='navbar-wrapper'>
      <nav className="flex flex-row justify-center items-center  bg-white fixed inset-x-0 top-0 h-16  shadow-lg shadow-slate-400/75 border-b-2 text-amber-900 p-3" id='navbar'>
        <div className="flex flex-row justify-between items-center flex-1">
          <section className="flex justify-center items-center gap-4 " id='logo-name'>
            <Link to="/" className="navbar-brand text-lg font-mono text-amber-900 font-bold" href="#">
            <img
            className="nav-logo"
            src="https://res.cloudinary.com/dtqrb1kbg/image/upload/v1679979057/photo_2023-03-28_05-49-12_ejgxr3.jpg"
            alt="nav-logo"
          />SAHARA
          </Link>
          </section>
          <div className="flex flex-row justify-between items-center" id='navlink-parent'>
            <ul className="flex flex-row justify-between items-center gap-4" id='navlink'>
              <li>
                <NavLink to="/products" className="text-lg font-mono font-bold">
                  Foods
                </NavLink>
              </li>
              <li>
                <NavLink to="/drinks" className="text-lg font-mono font-bold">
                  Drinks
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
