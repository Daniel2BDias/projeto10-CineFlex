import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import NavContainer from "./components/NavContainer";
import { useState } from "react";

export default function App() {

    const [infoSessao, setInfoSessao] = useState({});

    return (
        
        <BrowserRouter>
           <NavContainer />
            <Routes>
                <Route path="/" element={ <HomePage /> }></Route>
                <Route path="/assentos/:idSessao/sessoes/:idFilme" element={ <SeatsPage info={setInfoSessao} /> }></Route>
                <Route path="/sessoes/:idFilme" element={ <SessionsPage /> }></Route>
                <Route path="/sucesso" element={ <SuccessPage info={infoSessao} /> }></Route>
            </Routes>
        </BrowserRouter> 
    )
}


