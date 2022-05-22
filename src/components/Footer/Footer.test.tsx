import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Test Footer Component', () => {
  it('Renders Footer Component Successfully', async () => {
    render(<Footer />);
    const footer = await screen.findByTestId('footer');
    expect(footer).toBeVisible();
  });

  it('Renders Nav Component & Cart Button', async () => {
    render(<Footer />);
    const copy = await screen.findByTestId('copyright');
    expect(copy).toBeVisible();
  });
});
