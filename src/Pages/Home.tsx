import React from 'react'
import { Container } from '../components/Styled/Container'
import { Row, FlexItem } from '../components/Styled/Flex'
import { MainTitle } from '../components/Styled/Title'
import img from '../assets/img/img-tpl-1.jpg';

export const Home = () => {
    return (
        <Container as={"article"} style={{ marginTop: 25 }}>
            <MainTitle align={"center"}>
                Lorem Ipsum, Dolor sit
            </MainTitle>
            <Row as={"section"} style={{ paddingTop: 30 }} align={"center"}>
                <FlexItem size={[{ query: 0, value: 12 }, { query: 992, value: 6 }]}>
                    <p className={"paragraph"}>
                        Consectetur adipiscing elit. Mauris varius leo fringilla turpis ultricies, et viverra erat luctus. Ut elementum molestie nisl, id varius ipsum posuere commodo.
                    </p>
                    <p className={"paragraph"}>
                        Consectetur adipiscing elit. Mauris varius leo fringilla turpis ultricies, et viverra erat luctus. Ut elementum molestie nisl, id varius ipsum posuere commodo.
                        Consectetur adipiscing elit. Mauris varius leo fringilla turpis ultricies, et viverra erat luctus. Ut elementum molestie nisl, id varius ipsum posuere commodo.
                    </p>
                </FlexItem>
                <FlexItem size={[{ query: 0, value: 12 }, { query: 992, value: 6 }]}>
                    <Row align={"center"}>
                        <img src={img} alt={""} style={{ width: 500 }} />
                    </Row>
                </FlexItem>
            </Row>
        </Container>
    )
}
