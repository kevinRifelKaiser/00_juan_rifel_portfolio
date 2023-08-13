import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-row px-24 lg:px-52 py-5 max-w-full sticky top-0 backdrop-blur-sm">
      <p className="text-[#fefefe] font-mono basis-1/2">
        <span className="bg-[#fefefe] hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
          <Link to="/">Kevin Rifel Kaiser</Link>
        </span>
      </p>
      <div className="flex basis-1/2 justify-end">
        <ul className="text-[#fefefe] font-mono flex flex-row">
          <li className="mx-4 w-20">
            <span className="bg-[#fefefe] hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
              <Link to="/aboutMe">About me</Link>
            </span>
          </li>
          <li className="mx-4 w-20">
            <span className="bg-[#fefefe] hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
              <Link to="/work">My work</Link>
            </span>
          </li>
          <li className="mx-4 w-20">
            <span className="bg-[#fefefe] hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
              <Link to="/contactMe">Contact</Link>
            </span>
          </li>
          <li className="mx-4 w-20">
            <span className="bg-[#fefefe] hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
              <Link to="/contactMe">Resources</Link>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
