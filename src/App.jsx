import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" />
        <Route path="/ubicaciones" />
        <Route path="episodios" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
