import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('Test Hero Component', () => {
  it('Renders Hero Component Successfully', async () => {
    render(<Hero />);
    const hero = await screen.findByTestId('hero');
    expect(hero).toBeVisible();
  });

  it('Renders View Modules AnchorButton', async () => {
    render(<Hero />);
    const button = await screen.findByText(/view modules/i);
    expect(button).toBeVisible();
  });

  it('Renders Learn More AnchorButton', async () => {
    render(<Hero />);
    const button = await screen.findByText(/Learn More ↓/i);
    expect(button).toBeVisible();
  });
});
