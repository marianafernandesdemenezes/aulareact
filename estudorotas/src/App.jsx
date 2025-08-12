import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioJaneiro from "./Paginas/RioJaneiro";
import Minasgerais from "./Paginas/Minasgerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import Parana from "./Paginas/Parana";
import SantaCatarina from "./Paginas/SantaCatarina";
import RioGrandeSul from "./Paginas/RioGandeSul";


import "./App.css";
export default function App()
{
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sp" element={<SaoPaulo />}/>
        <Route path="/rj" element={<RioJaneiro />}/>
        <Route path="/mg" element={<Minasgerais />}/>
        <Route path="/es" element={<EspiritoSanto />}/>
        <Route path="/pa" element={<Parana />}/>
        <Route path="/rs" element={<RioGrandeSul />}/>
        <Route path="/sc" element={<SantaCatarina />}/>
 </Routes>
 </BrowserRouter>
    );
}