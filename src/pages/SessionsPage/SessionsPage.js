import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import loading from "../../assets/loading.svg";
import axios from "axios";

export default function SessionsPage() {
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState(undefined);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        promise.then(res => setSessoes(res.data));
        promise.catch(err => setSessoes(err.response.data));
    }, []);

    if(sessoes === undefined) {
        return (
            <PageContainer><img src={loading} alt="loading"/></PageContainer>
        )
    }

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {sessoes.days.map(s => 
                    <SessionContainer data-test="movie-day">
                    {s.weekday} - {s.date}
                        <Sections data-test="showtime" key={s.id} times={s.showtimes}></Sections>
                    </SessionContainer>
                )}
            </div>

            <FooterContainer data-test="footer">
                <div>
                    <img src={sessoes.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{sessoes.title}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const Sections = ({ times }) => {

    const { idFilme } = useParams();
    
    return (
        <ButtonsContainer key={times.id}>
            {times.map(t =>
                <Link to={`assentos/${t.id}/`}>
                    <button data-test="showtime">{t.name}</button> 
                </Link>
            )}
        </ButtonsContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
    img {
        align-self: center;
        justify-self: flex-start;
        height: 80%;
        width: 80%;
    }
`
const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }

    a:hover {
        cursor: pointer;
    }
    button:hover{
        cursor: pointer;
    }
    button:active{
        transform: scale(0.97);
    }
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