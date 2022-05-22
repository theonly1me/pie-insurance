import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Test Header Component', () => {
  it('Renders Header Component Successfully', async () => {
    render(<Header />);
    const header = await screen.findByTestId('header');
    expect(header).toBeVisible();
  });

  it('Renders Nav Component & Cart Button', async () => {
    render(<Header />);
    const nav = await screen.findByRole('navigation');
    expect(nav).toBeVisible();
  });

  it('Renders Logo', async () => {
    render(<Header />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeVisible();
  });
});
