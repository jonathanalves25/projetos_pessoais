import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width:1440px;
    height:6.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:auto;
`;

export const Logo = styled.img`
    width:5.25rem;
    height:2.5rem;
`;

export const ButtonArea = styled.div`
    display:flex;
    gap:0.75rem;
`;

export const LocationButton = styled.button`
    width:8.9rem;
    height:2.375rem;
    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};
    border:none;
    border-radius:4px;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:2px;
    cursor:pointer;
`;

export const CartButton = styled.button`
    background: ${props => props.theme["yellow-light"]};
    width:2.375rem;
    height:2.375rem;
    border-radius:4px;
    border:none;
    cursor:pointer;
`;