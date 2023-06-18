import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PersonajesScreen from "./screens/PersonajesScreen";
import PersonajeDetallesScreen from "./screens/PersonajeDetallesScreen";
import EpisodiosScreen from "./screens/EpisodiosScreen";
import UbicacionesScreen from "./screens/UbicacionesScreen";
import UbicacionDetallesScreen from "./screens/UbicacionDetallesScreen";
import EpisodioDetallesScreen from "./screens/EpisodioDetallesScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/personajes" element={<PersonajesScreen />} />
        <Route path="/personajes/:id" element={<PersonajeDetallesScreen />} />
        <Route path="/ubicaciones" element={<UbicacionesScreen />} />
        <Route path="/ubicaciones/:id" element={<UbicacionDetallesScreen />} />
        <Route path="/episodios" element={<EpisodiosScreen />} />
        <Route path="/episodios/:id" element={<EpisodioDetallesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
