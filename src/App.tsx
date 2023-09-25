import { RouterProvider } from 'react-router-dom';
import AuthProvider from '@/sections/app/contexts/AuthContext';
import { router } from '@/sections/app/router';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
