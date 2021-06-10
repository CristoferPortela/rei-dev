import styled from 'styled-components';

const sliderSize = "450px";

export const Container = styled.article`
    @media screen and (min-width: 993px) {
        height: ${(props) => props.theme.sizing.sliderHeight};
    }
`;

export const Header = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .25);
    @media screen and (min-width: 993px) {
        margin-left: -8.333%;
        height: ${(props) => props.theme.sizing.sliderHeight};
        transform: skew(20deg, 0);
        padding: 2rem 4rem 2rem 15%;
    }
    @media screen and (max-width: 992px) {
        width: 100vw; 
        padding: 2rem 2rem 2rem 10%;
    }
    h2 {
        color: #fff;
        font-weight: 500;
        font-size: 1.8rem;
        padding-bottom: 1rem;
        padding-top: .5rem;
        @media screen and (min-width: 993px) {
            font-size: 3rem;
            padding-bottom: 2rem;
            padding-top: 2rem;
        }
    }
    p {
        color: #fff;
        line-height: 1.7;
    }
    div {
        display: block;
        width: 100%;
        @media screen and (min-width: 993px) {
            transform: skew(-20deg, 0);
        }
    }
`;

export const Image = styled.img`
    @media screen and (min-width: 993px) {
        height: ${sliderSize};
        margin-left: -8.33%;
        min-width: ${() => window.outerWidth / 2}px;
    }
    @media screen and (max-width: 992px) {
        width: 100% !important;
    }
`;
