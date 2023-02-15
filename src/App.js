import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon/Pokemon";
import Kanto from "./components/Pokedex/Kanto"
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-teal-900 h-full min-h-screen">
      <Header/>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/kanto" element={<Kanto/>}/>
        <Route path="/pokedex/:id" element={<Pokemon />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
