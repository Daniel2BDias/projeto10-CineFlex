import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        
        <BrowserRouter>
           <NavContainer>CINEFLEX</NavContainer>
            <Routes>
                <Route path="/">
                    <HomePage />
                </Route>
                <Route path="/assentos/:idSessao/sessoes/:idFilme">
                <SeatsPage />
                </Route>
                <Route path="/sessoes/:idFilme">
                <SessionsPage />
                </Route>
                <Route path="/sucesso">
                <SuccessPage />
                </Route>
            </Routes>
        </BrowserRouter> 
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`