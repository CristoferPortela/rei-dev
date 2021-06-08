import styled from 'styled-components';

export const Brand = styled.div`
    @media screen and (min-width: 992px) {
        flex: 0 0 auto;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 75px;
        border-radius: 4px;
    }
    p {
        color: ${(props) => props.theme.primary};
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        @media screen and (min-width: 992px) {
            margin-left: -20px;
        }
    }
`;

export const NavMenu = styled.nav`
    height: 100%;
    @media screen and (min-width: 992px) {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    ul {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        li {
            border-right: 1px solid ${(props) => props.theme.primary};
            padding-right: 20px;
            padding-left: 20px;
            padding-top: 2px;
            padding-bottom: 2px;
            &:last-child {
                border-right: none;
            }
            a {
                font-size: .9rem;
                font-weight: 200;
                color: #303336;
            }
        }
    }
`;