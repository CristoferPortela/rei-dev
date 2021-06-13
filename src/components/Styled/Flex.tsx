import styled from "styled-components";


interface iRow {
    align?: string;
    justify?: string
}

export const Row = styled.div<iRow>`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: ${(props) => props.align || "flex-start"};
    ${(props) => props.align ? `justify-content: ${props.align}` : ''};
`;

interface iMediaQuery {
    query: number;
    value: number | string;
}
interface iFlexItem {
    size?: string | number | iMediaQuery[];
}

export const FlexItem = styled.div<iFlexItem>`
    ${(props) => {
        if (typeof props.size === 'number' || props.size === 'string') {
            const val = typeof props.size === 'string' ? props.size : ((props?.size ?? 1) * 8.333).toFixed(3) + "%";
            return (`
                width: ${val};
                flex: 0 0 ${val};
            `)
        } else if (Array.isArray(props.size)) {
            return props?.size?.map((med) => (`
                @media screen and (min-width: ${med.query}px) {
                    width: ${typeof med.value === 'string' ? med.value : (med.value * 8.333).toFixed(3) + "%"};
                    flex: 0 0 ${typeof med.value === 'string' ? med.value : (med.value * 8.333).toFixed(3) + "%"};
                }
            `))
        }
    }}
`;
