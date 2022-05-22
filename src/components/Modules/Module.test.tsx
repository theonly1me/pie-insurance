import { render, screen } from '@testing-library/react';
import Modules from '.';

describe('Test Modules Component', () => {
  it('Renders Modules Component Successfully', async () => {
    render(<Modules />);
    const heading = await screen.findByText(/Modules/i);
    expect(heading).toBeVisible();
  });

  it('Renders SubHeading', async () => {
    render(<Modules />);
    const text = await screen.findByText(/BROWSE THROUGH OUR OFFERINGS/i);
    expect(text).toBeVisible();
  });

  it('Renders Card Component', async () => {
    render(<Modules />);
    const card = await screen.findByText(/bikes/i);
    expect(card).toBeVisible();
  });

  it('Renders React Select component on Card', async () => {
    render(<Modules />);
    const select = await screen.findAllByText(/Select Coverage.../);
    expect(select.length).toBeTruthy();
  });
});
