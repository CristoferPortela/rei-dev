import styled from "styled-components";

interface iButton {
    border: string;
    bg?: string;
    color?: string;
}

export const Button = styled.button<iButton>`
    border: 2px solid ${(props) => props.theme.colors[props.border]};
    background-color: ${(props) => props.bg || "transparent"};
    color: ${(props) => props.color || "black"};
    cursor: pointer;
    outline: none;
    padding: .5rem 20%;
`;
