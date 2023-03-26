import { HomePage, AboutMe, ContactMe } from "./screens/index";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav>
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
    </div>
  );
};

export default App;
