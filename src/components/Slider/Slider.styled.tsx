import styled from 'styled-components';

const sliderSize = "450px";

export const Container = styled.article`
    height: ${sliderSize};
`;

export const Header = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    height: ${sliderSize};
    transform: skew(20deg, 0);
    margin-left: -8.333%;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .25);
    padding: 2rem 4rem 2rem 15%;
    h2 {
        color: #fff;
        font-size: 3rem;
        padding-bottom: 2rem;
        padding-top: 2rem;
        font-weight: 500;
    }
    p {
        color: #fff;
        line-height: 1.7;
    }
    div {
        display: block;
        width: 100%;
        transform: skew(-20deg, 0);
    }
`;

export const Image = styled.img`
    height: ${sliderSize};
    /* position: relative; */
    margin-left: -8.33%;
    min-width: ${() => window.outerWidth / 2}px;
    /* z-index: -1; */
`;
