import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body, body * {
        font-family: Roboto, Arial;
        font-size: 1rem;
        font-style: none;
        box-sizing: border-box;
        text-decoration: none;
        padding: 0;
        margin: 0;
        list-style: none;
        color: #000;
        display: block;
        max-width: 100% !important;
        font-weight: 500;
    }
    body {
        overflow-x: hidden;
    }
`;
