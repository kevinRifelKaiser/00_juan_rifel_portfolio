import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isPressed, setIsPressed] = useState(false);

  const onHandleMenu = () => {
    setIsPressed(!isPressed);
    const navLink = document.querySelector(".nav-link");
    navLink.classList.toggle("top-[100%]");
  };

  const MenuIcon = (props) => {
    return isPressed ? (
      <svg
        width="25"
        height="25"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        onClick={onHandleMenu}>
        <path
          fill="#fefefe"
          d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
        />
      </svg>
    ) : (
      <svg
        className="sm:hidden"
        width="25"
        height="25"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        onClick={onHandleMenu}>
        <path
          fill="#fefefe"
          d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12ZM40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24Zm176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24Z"
        />
      </svg>
    );
  };

  <svg
    width="512"
    height="512"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#000000"
      d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
    />
  </svg>;

  return (
    <header className="sticky top-0">
      <nav className="flex justify-between px-5 sm:px-10 lg:px-52 py-5 backdrop-blur-sm">
        <p className="text-[#fefefe] font-mono">
          <span className="bg-[#fefefe] hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
            <Link to="/">Kevin Rifel Kaiser</Link>
          </span>
        </p>
        <div className="nav-link transition-all duration-500 absolute bg-[#202b38] w-[100%] md:w-auto md:bg-transparent top-[-500%] items-center md:static md:min-h-fit">
          <ul className="text-[#fefefe] font-mono flex flex-col sm:flex-row text-center gap-8 md:gap-[4vw]">
            <li className="">
              <span className="bg-[#fefefe] hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
                <Link to="/aboutMe">About me</Link>
              </span>
            </li>
            <li className="">
              <span className="bg-[#fefefe] hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
                <Link to="/work">My work</Link>
              </span>
            </li>
            <li className="">
              <span className="bg-[#fefefe] hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
                <Link to="/contactMe">Contact</Link>
              </span>
            </li>
            <li className="">
              <span className="bg-[#fefefe] hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d] text-transparent bg-clip-text">
                <Link to="/contactMe">Resources</Link>
              </span>
            </li>
          </ul>
        </div>
        <MenuIcon className="md:hidden" />
      </nav>
    </header>
  );
};

export default NavBar;
