import { Route, Routes } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;
