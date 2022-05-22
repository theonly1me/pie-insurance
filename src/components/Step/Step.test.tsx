import { render, screen } from '@testing-library/react';
import Step from '.';
import img from '../../assets/step1-browse.svg';

describe('Test Step Component', () => {
  it('Renders Step Component Successfully', async () => {
    render(
      <Step
        stepNumber="01"
        stepHeading="Hello World"
        image={img}
        altText="browsing"
      >
        Welcome to Pie Insurance
      </Step>
    );
    const step = await screen.findByAltText(/browsing/i);
    expect(step).toBeVisible();
  });

  it('Renders Step Component with reverse variant Successfully', async () => {
    render(
      <Step
        stepNumber="01"
        stepHeading="Hello World"
        type="reverse"
        image={img}
        altText="not browsing"
      >
        Welcome to Pie Insurance
      </Step>
    );
    const step = await screen.findByAltText(/not browsing/i);
    expect(step).toBeVisible();
  });
});
