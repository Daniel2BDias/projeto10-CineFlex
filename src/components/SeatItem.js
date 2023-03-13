import styled from "styled-components";
import { useState } from "react";

const SeatItem = ({cor, children, ids, setids, id, setassento, assento}) => {
    const [selecionado, setSelecionado] = useState(false);

    const selecionou = (s) => {
        if(cor === false){return};

        if(ids.includes(id)){
            setids(ids.filter((e) => e !== id));
        } else {
            setids([...ids, id]);
        };
        
       
        if(assento.includes(children)){
            setassento(assento.filter((e) => e !== children));
        } else {
            setassento([...assento, children]);
        };
        
        setSelecionado(!s);
        
    }

    console.log(ids, assento);
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

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: scale(0.7);
    }
`

export default SeatItem