import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from "../components/App";

test('should render without crashing', () => {
  render(<App/>);
});

test('should proceed to the first question', async () => {
  render(<App/>);

  fireEvent.click(screen.getByText('Begin'));

  // tests for question screen
  await waitFor(() =>screen.getByTestId('question'));
});