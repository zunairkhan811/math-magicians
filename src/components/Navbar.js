import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <div className="nav-logo">
        <h1>Math Magicians</h1>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/Home" className="links">Home</Link>
          </li>
          <li>
            <Link to="/Calculator" className="links">Calculator</Link>
          </li>
          <li>
            <Link to="/Quote" className="links">Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
