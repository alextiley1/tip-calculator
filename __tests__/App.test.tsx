import { fireEvent, render, screen } from '@testing-library/react-native';

import App from '../src/App';

describe('App', () => {
  it('renders the calculator', async () => {
    await render(<App />);

    expect(screen.getByText('TIP CALCULATOR')).toBeTruthy();
    expect(screen.getByText('Total to Pay')).toBeTruthy();
    expect(screen.getByText('R0')).toBeTruthy();
  });

  it('calculates the total including the default 15% tip', async () => {
    await render(<App />);

    await fireEvent.changeText(screen.getByTestId('bill-input'), '100');
    await fireEvent.press(screen.getByText('Calculate'));

    expect(await screen.findByText('R115')).toBeTruthy();
  });
});
