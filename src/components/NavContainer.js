import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NavContainer() {

    const navigate = useNavigate();
    return (
        <Navcontainer onClick={() => navigate('/')}>CINEFLEX</Navcontainer>
    )
}

const Navcontainer = styled.div`
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