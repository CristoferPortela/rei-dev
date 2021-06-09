import { createGlobalStyle } from 'styled-components';
import 'styled-components';

interface iTheme {
    colors: {

        primary: string;
        secondary: string;

        light: string;
        dark: string;
        success: string;
        danger: string;
        warning: string;
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends iTheme { }
}

export const StyledTheme: iTheme = {
    colors: {

        primary: "rgb(84, 65, 160)",
        secondary: "",

        light: "",
        dark: "",
        success: "",
        danger: "",
        warning: "",
    }
}


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
    body style, body script {
        display: none;
    }
    body {
        overflow-x: hidden;
    }
`;