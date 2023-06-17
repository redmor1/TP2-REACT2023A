import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PersonajesScreen from "./screens/PersonajesScreen";
import PersonajeDetallesScreen from "./screens/PersonajeDetallesScreen";
import EpisodiosScreen from "./screens/EpisodiosScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/personajes" element={<PersonajesScreen />} />
        <Route path="/personajes/:id" element={<PersonajeDetallesScreen />} />
        <Route path="/ubicaciones" />
        <Route path="/episodios" element={<EpisodiosScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
