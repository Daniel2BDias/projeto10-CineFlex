import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import loading from "../../assets/loading.svg";
import SeatItem from "../../components/SeatItem";

export default function SeatsPage({info, setHome}) {

const { idSessao, filme } = useParams();
const [assentos, setAssentos] = useState(undefined);
const navigate = useNavigate();
const [ids, setIds] = useState([]);
const [assento, setAssento] = useState([]);
const [nome, setNome] = useState("");
const [cpf, setCpf] = useState("");
const req = {
    ids: ids,
    name: nome,
    cpf: cpf
}

useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
    promise.then(res => setAssentos(res.data))
    promise.catch(err => setAssentos(err.response.data))
}, [])

if(assentos === undefined) {
    return (
        <PageContainer><img src={loading} alt="loading"/></PageContainer>
    )
}

const reserva = (e) => {
    e.preventDefault();
    setHome(true);
    info({title: assentos.movie.title, day: assentos.day.date, name: assentos.name, id: assento, nome, cpf})
    const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", req);
    promise.then(navigate("/sucesso"));
    promise.catch(err => console.log(err.response.data));
}

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {assentos.seats.map(s => 
                    <SeatItem key={s.name} id={s.id} ids={ids} setids={setIds} assento={assento} setassento={setAssento} cor={s.isAvailable}>{s.name}</SeatItem>    
                )}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle background="#1AAE9E" border="#0E7D71"/>
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle background="#C3CFD9" border="#7B8B99"/>
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle background="#FBE192" border="#F7C52B"/>
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer onSubmit={reserva}>
                <label htmlFor="nome">Nome do Comprador:</label>
                <input data-test="client-name" placeholder="Digite seu nome..." id="nome" value={nome} onChange={e => setNome(e.target.value)} required/>

                <label htmlFor="cpf">CPF do Comprador:</label>
                <input data-test="client-cpf" placeholder="Digite seu CPF..." id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} required/>

                <button data-test="book-seat-btn" type="submit">Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer data-test="footer">
                <div>
                    <img src={assentos.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{assentos.movie.title}</p>
                    <p>{assentos.day.weekday} - {assentos.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    img {
        height: 80%;
        width: 80%;
    }
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }

    button:active {
        transform: scale(0.97);
    }

    button:hover {
        cursor: pointer;
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${props => props.border};
    background-color: ${props => props.background};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`