import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  return (
    <div className="bg-teal-900 h-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
