import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Personajes from "./screens/Personajes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:id" />
        <Route path="/ubicaciones" />
        <Route path="/episodios" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
