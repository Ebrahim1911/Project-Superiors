import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleState } from "../rtk/slices/NavParSlice";
import "./navPar.css";
function NavPar() {
  const navParState = useSelector((state) => state.navPar);
  const disPatch = useDispatch();
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" onClick={() => disPatch(toggleState())}>
          <img className="logo" src={Logo} alt="Lens logo" />
        </Link>
        <ul className={`navLinks ${navParState ? "showNav" : "hideNav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} onClick={() => disPatch(toggleState())}>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav-toggle-btn"
          onClick={() => disPatch(toggleState())}
        >
          {navParState ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
export default NavPar;
