import React from 'react'
import { Container, Header, Image } from './Slider.styled';
import img1 from '../../assets/img/img-tpl-1.jpg';

export const Slider = () => {
    return (
        <Container>
            <section>
                <div className="flex">
                    <Header className="flex-8">
                        <div>
                            <h2>Titulo</h2>
                            <p>Texto</p>
                            <p>Teste</p>
                        </div>
                    </Header>
                    <figure className="flex-9">
                        <Image src={img1} alt="" />
                    </figure>
                </div>
            </section>
        </Container>
    )
}
