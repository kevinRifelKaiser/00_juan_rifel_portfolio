import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-row px-24 lg:px-52 py-5 max-w-full sticky top-0 backdrop-blur-sm">
      <p className="text-[#fefefe] font-mono basis-1/2">
        <Link to="/">Kevin Rifel Kaiser</Link>
      </p>
      <div className="flex basis-1/2 justify-end">
        <ul className="text-[#fefefe] font-mono flex flex-row">
          <li className="mx-4 w-20">
            <Link to="/aboutMe">About me</Link>
          </li>
          <li className="mx-4 w-20">
            <Link to="/work">My work</Link>
          </li>
          <li className="mx-4 w-20">
            <Link to="/contactMe">Contact</Link>
          </li>
          <li className="mx-4 w-20">
            <Link to="/contactMe">Resources</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
