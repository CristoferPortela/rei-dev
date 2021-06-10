import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Slider } from '.';
import { ThemeProvider } from 'styled-components';
import { StyledTheme } from '../../StyledGlobal';
// import img1 from '../../assets/img/img-tpl-1.jpg';
import img2 from '../../assets/img/pexels-vlada-karpovich-6114985.jpg';

const S = () => (
    <ThemeProvider theme={StyledTheme}>
            <Slider
                images={[{
                    title: "Lorem ipsum dolor sit amet.",
                    imageUrl: img2,
                    text: ` <p>Consectetur adipiscing elit. Mauris varius leo fringilla turpis ultricies, et viverra erat luctus. Ut elementum molestie nisl, id varius ipsum posuere commodo.</p>
                    <p>Donec tortor velit, laoreet vel vulputate ac, scelerisque et sem. Sed at maximus lectus. Mauris porttitor turpis in mauris tincidunt accumsan. </p>`,
                    author: "Foto de Vlada Karpovich no Pexels author",
                }]}
            />
    </ThemeProvider>
)

test('Checking slider title', () => {
    render(<S />);
    const title = screen.getByText(/Lorem ipsum dolor sit amet./i);
    expect(title).toBeInTheDocument();
});
