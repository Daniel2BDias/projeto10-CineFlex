import styled from "styled-components";
import { Link } from "react-router-dom";
import back from "../assets/back.png";

export default function NavContainer({home, setHome}) {

    function h () {
        setHome(!home);
    }

    return (
        <Navcontainer>
            {!home ? <Link data-test="go-home-header-btn" to="/"><img src={back} onClick={h}/></Link> : <div></div>}
            
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

    a:active {
        transform: scale(0.8);
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