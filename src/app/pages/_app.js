import { Provider } from 'react-redux';
import { store } from '../store';
import { Suspense, lazy } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import "../pages/index"

const Layout = lazy(() => import('../components/layout'));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </Suspense>
    </Provider>
  );
}

export default MyApp;
