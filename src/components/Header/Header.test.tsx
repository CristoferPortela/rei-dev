import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '.';

const H = () => (
    <Router>
        <Header />
    </Router>
)

test('renders rei dev text', () => {
    render(<H />);
    const reiDevText = screen.getByAltText(/Rei-dev logo/i);
    expect(reiDevText).toBeInTheDocument();
});
