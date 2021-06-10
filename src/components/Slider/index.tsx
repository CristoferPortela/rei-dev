import React from 'react'
import { Container, Header, Image } from './Slider.styled';
// import img1 from '../../assets/img/img-tpl-1.jpg';
import img2 from '../../assets/img/pexels-vlada-karpovich-6114985.jpg';

export const Slider = () => {
    return (
        <Container>
            <section>
                <div className={"flex flex-wrap-md"}>
                    <Header className={"flex-8-lg flex-12"}>
                        <div>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Consectetur adipiscing elit. Mauris varius leo fringilla turpis ultricies, et viverra erat luctus. Ut elementum molestie nisl, id varius ipsum posuere commodo.</p>
                            <p>Donec tortor velit, laoreet vel vulputate ac, scelerisque et sem. Sed at maximus lectus. Mauris porttitor turpis in mauris tincidunt accumsan. </p>
                        </div>
                    </Header>
                    <figure className={"flex-9-lg flex-12 w-100-md"}>
                        <Image src={img2} alt="" />
                    </figure>
                    <p className={"flex-12"} style={{ textAlign: 'right' }}>
                        <small style={{ fontSize: 12 }}>
                            Foto de Vlada Karpovich no Pexels
                        </small>
                    </p>
                </div>
            </section>
        </Container>
    )
}
