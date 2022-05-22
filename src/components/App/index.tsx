import { lazy, Suspense } from 'react';
// components
import Loader from '../reusable/Loader';
import Header from '../Header';
import Footer from '../Footer';
import Details from '../Details';
import Hero from '../Hero';

const App: React.FC = () => {
  //Lazy Load
  const Modules = lazy(() => import('../Modules'));

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Details />
        <Suspense fallback={<Loader />}>
          <Modules />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
