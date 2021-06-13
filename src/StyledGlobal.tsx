import { createGlobalStyle } from 'styled-components';
import 'styled-components';

interface iColors {
    primary: string;
    secondary: string;

    light: string;
    dark: string;
    success: string;
    danger: string;
    warning: string;

    transparent: string;
    
    [key: string]: string;
}
interface iSizing {
    sliderHeight: number,
}

interface iFunctions {
    chooseTextColor: (color: string) => string;
    transparentize: (transparency: number[]) => string,
}

export interface iTheme {
    colors: iColors,
    sizing: iSizing,
    functions: iFunctions,
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
        transparent: "rgba(0, 0, 0, 0)",
    },
    sizing: {
        sliderHeight: 450,
    },
    functions: {
        chooseTextColor: (color: string) => {
            const red = (0xFF & (parseInt(color, 16)) * 0.299);
            const green = (0xFF & (parseInt(color, 16) >> 0x8) * 0.587);
            const blue = (0xFF & (parseInt(color, 16)) * 0.114);
            
            const rgb = red + green + blue;
            return parseInt(rgb.toString(), 16) > 186 ? "#00000" : "#FFFFF";
        },
        transparentize: (transparency = [0, 0, 0, 0]) => `rgba(${transparency.join(', ')})`,
    }
}


export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: ${(props) => props.theme.colors.primary};
    }
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