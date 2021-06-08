import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyled, NavMenu, Brand } from './Header.styled';
import Logo from '../../assets/img/logo.webp';

export const Header = () => {
    const pages = [
        "Inicio",
        "Serviços",
        "Preços",
        "Portfolio",
        "Promoções",
        // "Sobre",
        "Contato",
    ];
    return (
        <HeaderStyled>
            <Brand>
                <Link to="/">
                    {/* Rei dev */}
                    <img src={Logo} alt="Rei-dev logo" />
                </Link>
            </Brand>
            <NavMenu>
                <ul>
                    {
                        pages.map((page) => (
                            <li key={page}>
                                <Link to="/">
                                    {page}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </NavMenu>
        </HeaderStyled>
    )
}
