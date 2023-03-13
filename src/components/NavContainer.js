import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import back from "../assets/back.png";

export default function NavContainer() {

    const navigate = useNavigate();
    return (
        <Navcontainer>
            <Link data-test="go-home-header-btn" to="/"><img src={back}/></Link>
            
            <h1>CINEFLEX</h1>
            <div></div>
            </Navcontainer>
    )
}

const Navcontainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    align-text; center;
    a {
        text-decoration: none;
        color: #E8833A;
    }

    h1 {

    }

    img {
        margin-left: 10px;
        justify-self: flex start;
        height: 30px;
        width: 30px;
    }
    div {
        width: 33px;
    }
`