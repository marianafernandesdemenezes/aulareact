import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioJaneiro from "./Paginas/RioJaneiro";
import Minasgerais from "./Paginas/Minasgerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";



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
           
 </Routes>
 </BrowserRouter>
    );
}