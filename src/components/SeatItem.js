import styled from "styled-components";
import { useState } from "react";

const SeatItem = ({ cor, children, ids, setids, id, setassento}) => {
    const [selecionado, setSelecionado] = useState(false);

    const selecionou = (s) => {
        if(cor === false){return};
        
        setSelecionado(!s)
        setids([...ids, id]);
        setassento(children);
    }
    
    return (
        <SeatItemCss data-test="seat" onClick={() => selecionou(selecionado, cor)} select={selecionado} cor={cor}>{children}</SeatItemCss>
    )
}

const SeatItemCss = styled.div`
    border: 1px solid ${props => props.select ? "#0E7D71" : props.cor ? "#7B8B99" : "#F7C52B"};
    background-color: ${props => props.select ? "#1AAE9E" : props.cor ? "#C3CFD9" : "#FBE192"};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`

export default SeatItem