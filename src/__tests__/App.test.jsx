// src/__tests__/App.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// eslint-disable-next-line no-undef
test('renders Vite + React text', () => {
    render(<App />);
    const headerElement = screen.getByText(/Vite \+ React/i); 
    //expect(linkElements.length).toBeGreaterThan(0);
    expect(headerElement).toBeInTheDocument();
});

test('increments on button click', () => {
    render(<App />);
    const buttonElement = screen.getByText(/count is 0/i); 
    expect(buttonElement).toBeInTheDocument();
    //const heading = screen.getByRole('heading', { name: /vite \+ react/i });
    //expect(heading).toBeInTheDocument();
    fireEvent.click(buttonElement);
    //expect(buttonElement).toHaveTextContext('count is 1');
    expect(buttonElement).toHaveTextContent('count is 1');

    fireEvent.click(buttonElement);
    //expect(buttonElement).toHaveTextContext('count is 2');
    expect(buttonElement).toHaveTextContent('count is 2');

});


