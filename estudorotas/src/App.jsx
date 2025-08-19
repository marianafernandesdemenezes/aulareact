import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioJaneiro from "./Paginas/RioJaneiro";
import Minasgerais from "./Paginas/Minasgerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import Parana from "./Paginas/Parana";
import SantaCatarina from "./Paginas/SantaCatarina";
import RioGrandeSul from "./Paginas/RioGandeSul";


import Bahia from "./Paginas/Bahia";
import Alagoas from "./Paginas/Alagoas";
import Maranhao from "./Paginas/Maranhao";
import Piaui from "./Paginas/Piaui";
import RioGrandeNorte from "./Paginas/RioGrandeNorte";
import Rondonia from "./Paginas/Rondonia";
import Sergipe from "./Paginas/Sergipe";


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


        
        <Route path="/BH" element={<Bahia />}/>
        <Route path="/AL" element={<Alagoas />}/>
        <Route path="/MR" element={<Maranhao />}/>
        <Route path="/PI" element={<Piaui />}/>
        <Route path="/RN" element={<RioGrandeNorte />}/>
        <Route path="/RD" element={<Rondonia />}/>
        <Route path="/PR" element={<Parana />}/>
        <Route path="/SG" element={<Sergipe />}/>
 </Routes>
 </BrowserRouter>
    );
}