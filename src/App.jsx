import GlobalStyles from 'components/GlobalStyles';
// import Home from 'components/Home';
import NotFound from 'components/NotFound';
import ProtectRouter from 'components/ProtectRouter';
import ScrollToTop from 'components/ScrollToTop';
import Dashboard from 'features/Dashboard';
import Blog from 'features/HomeS/pages/Blog';
// import Cart from 'features/HomeS/pages/Cart';
import Contact from 'features/HomeS/pages/Contact';
// import DetailProduct from 'features/HomeS/pages/DetailProduct';
// import Introduce from 'features/HomeS/pages/Introduce';
// import Product from 'features/HomeS/pages/Product';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import { Spinner } from 'reactstrap';

const Home = lazy(() => import('components/Home'));
const Product = lazy(() => import('features/HomeS/pages/Product'));
const Cart = lazy(() => import('features/HomeS/pages/Cart'));
const DetailProduct = lazy(() => import('features/HomeS/pages/DetailProduct'));
const Introduce = lazy(() => import('features/HomeS/pages/Introduce'));

function App() {
  return (
    <GlobalStyles>
      <Suspense fallback={<Spinner></Spinner>}>
        <ScrollToTop>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/product" element={<Product />} />
            <Route index path="/cart" element={<Cart />} />
            <Route index path="/detail-product" element={<DetailProduct />} />
            <Route index path="/introduce" element={<Introduce />} />
            <Route index path="/contact" element={<Contact />} />
            <Route index path="/blog" element={<Blog />} />
            <Route
              path="admin/*"
              element={
                <ProtectRouter>
                  <Dashboard />
                </ProtectRouter>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        className="custom"
      />
    </GlobalStyles>
  );
}

export default App;
