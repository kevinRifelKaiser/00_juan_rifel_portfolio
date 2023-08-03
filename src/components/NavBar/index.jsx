import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <p className="text-white font-mono">
        <Link to="/">Kevin Rifel Kasier</Link>
      </p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutMe">About me</Link>
        </li>
        <li>
          <Link to="/work">My work</Link>
        </li>
        <li>
          <Link to="/contactMe">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
