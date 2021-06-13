import styled from "styled-components";

interface iContainer {
    bg?: string;
    shadow?: string;
}

export const Container = styled.div.attrs({ className: 'container' }) <iContainer>`
    display: block;
    background-color: ${(props) => props.bg || 'none'};
`;