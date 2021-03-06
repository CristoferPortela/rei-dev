import React from 'react'
import { Link } from 'react-router-dom'
import { NavMenu, Brand } from './Header.styled';
import Logo from '../../assets/img/logo2.webp';
import { FlexItem, Row } from '../Styled/Flex';
import { Button } from '../Styled/Button';
import { Container } from '../Styled/Container';
import { Icon } from '../Styled/Miscellaneous';

export const Header = () => {
    const [menuActive, setMenuActive] = React.useState<boolean>(false);
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
            <Row align={"start-flex"} className={"space-between-md"}>
                <FlexItem size={[{ query: 0, value: 3 }, { query: 552, value: 2 }, { query: 992, value: "auto" }]}>
                    <Brand>
                        <Link className="flex justify-center" to="/">
                            {/* Rei dev */}
                            <img src={Logo} alt="Rei-dev logo" />
                        </Link>
                        <p>
                            Rei dev
                        </p>
                    </Brand>
                </FlexItem>
                <Row as={FlexItem} size={[{ query: 0, value: 9 }, { query: 552, value: 10 }]} align={"center"} className={`menu ${menuActive ? 'active' : ''}`}>
                    <FlexItem size={[{ query: 0, value: 9 }, { query: 1142, value: 8 }]}>
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
                    <FlexItem size={[{ query: 0, value: 3 }, { query: 1142, value: 4 }]} id="buttons-nav-menu">
                        <Row as="ul" align={"center"}>
                            <FlexItem as="li" size={5}>
                                <Button border={"primary"}>
                                    Botão 1
                                </Button>
                            </FlexItem>
                            <FlexItem as="li" size={5}>
                                <Button border={"primary"} bg={"rgb(84, 65, 160)"} color={"white"}>
                                    Botão 2
                                </Button>
                            </FlexItem>
                            <FlexItem as="li" size={2}>
                                <Icon>
                                    search
                                </Icon>
                            </FlexItem>
                        </Row>
                    </FlexItem>
                </Row>
                <Row as={FlexItem} size={9} className={"flex-end-md hidden-lg"}>
                    <Button onClick={() => setMenuActive(!menuActive)} border={"transparent"}>
                        <Icon style={{ fontSize: 36 }}>
                            menu
                        </Icon>
                    </Button>
                </Row>
            </Row>
        </Container >
    )
}
