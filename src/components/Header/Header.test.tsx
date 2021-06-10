import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '.';
import { ThemeProvider } from 'styled-components';
import { StyledTheme } from '../../StyledGlobal';

const H = () => (
    <ThemeProvider theme={StyledTheme}>
        <Router>
            <Header />
        </Router>
    </ThemeProvider>
)

test('renders rei dev text', () => {
    render(<H />);
    const reiDevText = screen.getByAltText(/Rei-dev logo/i);
    expect(reiDevText).toBeInTheDocument();
});

test('renders menu', () => {
    render(<H />);
    const menuHamburguer = screen.getByText(/menu/i);
    expect(menuHamburguer).toBeInTheDocument();
});

