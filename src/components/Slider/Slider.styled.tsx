import styled from 'styled-components';

export const Container = styled.article`
    height: 350px;
`;

export const Header = styled.header`
    background-color: rgb(64, 45, 140);;
    height: 350px;
    transform: skew(20deg, 0);
    margin-left: -8.333%;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .25);
    padding: 2rem 4rem 2rem 15%;
    h2 {
        color: #fff;
        font-size: 3rem;
        padding-bottom: 2rem;
        padding-top: 2rem;
    }
    p {
        color: #fff;
    }
    div {
        display: block;
        width: 100%;
        transform: skew(-20deg, 0);
    }
`;

export const Image = styled.img`
    height: 350px;
    /* position: relative; */
    margin-left: -8.33%;
    /* z-index: -1; */
`;
