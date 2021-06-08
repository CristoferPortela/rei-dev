import styled from 'styled-components';

export const HeaderStyled = styled.header.attrs({
    className: 'flex container'
})`
    background-color: #fafbfc;
    align-items: center;
`;

export const Brand = styled.div`
    @media screen and (min-width: 992px) {
        flex: 0 0 15%;
        width: 15%;
        display: flex;
        justify-content: flex-end;
    }
    img {
        width: 125px;
        border-radius: 4px;
    }
`;

export const NavMenu = styled.nav`
    height: 100%;
    @media screen and (min-width: 992px) {
        flex: 0 0 80%;
        width: 80%;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    ul {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        li {
            border-right: 1px solid rgb(84, 65, 160);
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