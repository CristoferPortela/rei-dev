import styled from "styled-components";


interface iRow {
    align?: string;
}

export const Row = styled.div.attrs({ className: 'flex' })<iRow>`
    width: 100%;
    flex-wrap: wrap;
    align-items: ${(props) => props.align || "flex-start"};
`;

interface iFlexItem {
    size?: number;
    auto?: boolean;
}

export const FlexItem = styled.div<iFlexItem>`
    width: ${(props) => props.auto ? "auto" : ((props?.size ?? 1) * 8.333).toFixed(3) + "%"};
    flex: 0 0 ${(props) => props.auto ? "auto" :((props?.size ?? 1) * 8.333).toFixed(3) + "%"};
`;