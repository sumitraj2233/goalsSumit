import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaHome, FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <FaHome />
          Goal setter
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser />
            register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
