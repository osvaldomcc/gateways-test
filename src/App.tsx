import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AuthProvider from '@/sections/app/contexts/AuthContext';
import { router } from '@/sections/app/router';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
