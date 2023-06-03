import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <div className="nav-logo">
        <h1>Math Magicians</h1>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/Home" className="links">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Calculator" className="links">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/Quote" className="links">Quote</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
