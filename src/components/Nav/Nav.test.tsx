import { fireEvent, render, screen } from '@testing-library/react';
import Nav from '.';

describe('Test Nav Component', () => {
  it('Renders Nav Component Successfully', async () => {
    render(<Nav />);
    const nav = await screen.findByRole('navigation');
    expect(nav).toBeVisible();
  });

  it('Renders NavButton AnchorButton', async () => {
    render(<Nav />);
    const button = await screen.findByAltText(/Go to Cart/i);
    expect(button).toBeVisible();
  });

  it('Renders Toast on NavButton Click', async () => {
    render(<Nav />);
    const button = await screen.findByTestId('listbutton');
    fireEvent.click(button);
    const toast = await screen.findByRole('alert');
    expect(toast).toBeVisible();
  });
});
