import { RouterProvider } from 'react-router-dom';
import { router } from '@/sections/app/router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
