import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <p>
        <Link to="/">Juan Rifel</Link>
      </p>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/aboutMe">Sobre mi</Link>
        </li>
        <li>
          <Link to="/contactMe">Mi contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
