import styled from 'styled-components';

interface iMainTitle {
    align?: string;
}

export const MainTitle = styled.h1<iMainTitle>`
    font-size: 1.85rem;
    text-align: ${(props) => props.align || 'left'};
`;
