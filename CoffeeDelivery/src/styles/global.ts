import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme["base-text"]};
    }

    p, span, h3 {
        font-family: "Roboto", sans-serif;
    }
`;