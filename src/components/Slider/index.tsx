import React from 'react'
import { Container, Header, Image } from './Slider.styled';

interface iImage {
    title: string;
    text?: string;
    imageUrl?: string;
    imageDescription?: string;
    author?: string;
}
interface iSlider {
    images: Array<iImage>;
}

export const Slider: React.FunctionComponent<iSlider> = (props) => {
    return (
        <Container>
            <section>
                {
                    props.images.map((image) => (
                        <div className={"flex flex-wrap-md"} key={image.title}>
                            <Header className={"flex-8-lg flex-12"}>
                                <div>
                                    <h2>{image.title}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: image?.text ?? "" }} />
                                </div>
                            </Header>
                            {
                                image.imageUrl ?
                                    <figure className={"flex-9-lg flex-12 w-100-md"}>
                                        <Image src={image.imageUrl} alt={image?.imageDescription ?? image.title} />
                                    </figure>
                                    : null
                            }
                            {
                                image.author ?
                                    <p className={"flex-12"} style={{ textAlign: 'right' }}>
                                        <small style={{ fontSize: 12 }}>
                                            {image.author}
                                        </small>
                                    </p>
                                    : null
                            }
                        </div>
                    ))
                }
            </section>
        </Container>
    )
}
