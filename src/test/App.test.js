import { render, screen, fireEvent } from '@testing-library/react';
import App from "../components/App";

test('renders learn react link', () => {
  fireEvent.click(screen.getByText('Begin'))
});
