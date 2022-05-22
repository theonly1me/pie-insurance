import { act, render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import mockHeader from '../Header';
import mockHero from '../Hero';
import mockDetails from '../Details';
import mockFooter from '../Footer';

import App from './index';
import { Suspense } from 'react';
import Modules from '../Modules';
import Loader from '../reusable/Loader';

describe('Test App Component', () => {
  it('Renders App Component Successfully', async () => {
    render(<App />);
  });

  it('Renders Header Section into the document', async () => {
    jest.mock('../Header', () => {
      return mockHeader;
    });

    render(<App />);
    const component = await screen.findByTestId('header');
    expect(component).toBeInTheDocument();
  });

  it('Renders the Nav section of the header containing the shopping cart button', async () => {
    jest.mock('../Header', () => {
      return mockHeader;
    });

    render(<App />);
    const component = await screen.findByRole('navigation');
    expect(component).toBeInTheDocument();
  });

  it('Renders the Hero component and Anchor Buttons', async () => {
    jest.mock('../Hero', () => {
      return mockHero;
    });
    render(<App />);
    const viewModulesAnchorButton = await screen.findByText(/view modules/i);
    const learnMoreAnchorButtom = await screen.findByText(/learn more ↓/i);
    expect(viewModulesAnchorButton).toBeInTheDocument();
    expect(learnMoreAnchorButtom).toBeInTheDocument();
  });

  it('Renders the Details component', async () => {
    jest.mock('../Details', () => {
      return mockDetails;
    });
    render(<App />);
    const detailsComponent = await screen.findByText(/Get your cover today/i);
    expect(detailsComponent).toBeInTheDocument();
  });

  it('Renders the Modules component lazily', async () => {
    let root;
    act(() => {
      root = create(
        <Suspense fallback={<Loader />}>
          <Modules />
        </Suspense>
      );
    });
    expect(root).toMatchSnapshot();
  });

  it('Renders Footer Component into the document', async () => {
    jest.mock('../Footer', () => {
      return mockFooter;
    });

    render(<App />);
    const component = await screen.findByTestId('footer');
    expect(component).toBeInTheDocument();
  });
});
