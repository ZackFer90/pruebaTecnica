import React from "react";
import { Route, Routes, Navigate } from "react-router";
// import Carta from './pages/vistaCarta/Carta'
import Home from "./pages/menu/Home";
import PokemonDetail from "./pages/pokemonDetail/PokemonDetail";

export default function AppRouter() {
    return (
       <div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:nombre" element={<PokemonDetail />} />

            {/* <Route path="/pokemon/:nombre" element={<Carta />} /> */}
          </Routes>
       </div>
    );
 }