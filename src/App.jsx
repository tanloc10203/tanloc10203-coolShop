import GlobalStyles from 'components/GlobalStyles';
import Home from 'components/Home';
import NotFound from 'components/NotFound';
import ProtectRouter from 'components/ProtectRouter';
import Dashboard from 'features/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';

function App() {
  return (
    <GlobalStyles>
      <Routes>
        <Route index path="/" element={<Home />} />
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
