import React from 'react'
import { Link } from 'react-router-dom'
import { NavMenu, Brand } from './Header.styled';
import Logo from '../../assets/img/logo.webp';
import { FlexItem, Row } from '../Styled/Flex';
import { Button } from '../Styled/Button';
import { Container } from '../Styled/Container';

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
        <Container as={"header"} bg={"#fafbfc"}>

            <Row align={"Center"}>
                <FlexItem auto={true}>
                    <Brand>
                        <Link to="/">
                            {/* Rei dev */}
                            <img src={Logo} alt="Rei-dev logo" />
                        </Link>
                    </Brand>
                </FlexItem>
                <FlexItem size={6}>
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
                </FlexItem>
                <FlexItem size={3}>
                    <Row>
                        <FlexItem size={5}>
                            <Button border={"rgb(84, 65, 160)"}>
                                Botão 1
                            </Button>
                        </FlexItem>
                        <FlexItem size={5}>
                            <Button border={"rgb(84, 65, 160)"} bg={"rgb(84, 65, 160)"} color={"white"}>
                                Botão 2
                            </Button>
                        </FlexItem>
                        <FlexItem size={2}>
                            <span className="material-icons">
                                search
                            </span>
                        </FlexItem>
                    </Row>
                </FlexItem>
            </Row>
        </Container>
    )
}
