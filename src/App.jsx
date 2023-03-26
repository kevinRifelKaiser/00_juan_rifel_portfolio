import { HomePage, AboutMe, ContactMe } from "./screens/index";
import { NavBar } from "./components/index";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
    </div>
  );
};

export default App;
