import { lazy, Suspense } from 'react';
import Loader from './reusable/Loader';

const App: React.FC = () => {
  const Hero = lazy(() => import('./Hero'));
  const Header = lazy(() => import('./Header'));
  const Details = lazy(() => import('./Details'));
  const Modules = lazy(() => import('./Modules'));
  const Footer = lazy(() => import('./Footer'));
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <main>
          <Hero />
          <Details />
          <Modules />
        </main>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
