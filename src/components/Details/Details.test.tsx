import { render, screen } from '@testing-library/react';
import Details from '.';

describe('Test Details Component', () => {
  it('Renders Component Successfully', async () => {
    render(<Details />);
    const details = await screen.findByTestId('details');
    expect(details).toBeVisible();
  });

  it('Renders Heading', async () => {
    render(<Details />);
    const text = await screen.findByText(/Get your cover today/i);
    expect(text).toBeVisible();
  });

  it('Renders SubHeading', async () => {
    render(<Details />);
    const text = await screen.findByText(/OUR SIMPLE 3 STEP PROCESS/i);
    expect(text).toBeVisible();
  });

  it('Renders Step Component', async () => {
    render(<Details />);
    const step = await screen.findByText(/Browse through our modules/i);
    const step2 = await screen.findByText(
      /Select modules that fit your needs/i
    );
    const step3 = await screen.findByText(/Add to cart, checkout and done!/i);
    expect(step).toBeVisible();
    expect(step2).toBeVisible();
    expect(step3).toBeVisible();
  });
});
