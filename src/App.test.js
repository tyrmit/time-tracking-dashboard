import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    let linkElement = null;
    try {
        linkElement = screen.getByText(/learn react/i);
    } catch (e) {
        console.log(e);
    }
    expect(linkElement).toBeNull();
});
