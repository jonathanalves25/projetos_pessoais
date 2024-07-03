import styled from "styled-components";
import backgroundImg from '../../assets/Background.png'

export const CoffeeIntroArea = styled.div`
    background: url(${backgroundImg});
    background-size: cover;
    height:34rem;
    max-width:90rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

export const CoffeeIntroText = styled.div`

    max-width:36.75rem;

    h1 {
        font-family: "Baloo 2", sans-serif;
        font-weight: 800;
        font-size: 3rem;
        color: ${props=> props.theme["base-title"]};
    }

    h2 {
        font-family: "Roboto", sans-serif;
        font-size:1.25rem;
        color:${props=> props.theme["base-subtitle"]};
        margin-top:1rem;
    }
`;

export const CoffeeIntroImg = styled.div`
    max-width:29.75rem;
`;

export const CoffeeIntroItemArea = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items:start;
    margin-top:4.125rem;
    gap:1.25rem;
`;

export const CoffeeIntroItem = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:0.75rem;

    p {
        font-size:1rem;
        color:${props=> props.theme["base-text"]};
    }
`;

export const CoffeesArea = styled.div`
    max-width:90rem;
    margin:0 6rem;
`;

export const CoffeeTitle = styled.h1`
    font-family: "Baloo 2", sans-serif;
    font-size:2rem;
    color: ${props => props.theme["base-subtitle"]}
`;