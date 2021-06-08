import styled from "styled-components";

interface iContainer {
    bg: string;
}

export const Container = styled.div.attrs({ className: 'container' })<iContainer>`
    background-color: ${(props) => props.bg || 'none'};
`;