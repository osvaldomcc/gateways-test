import { Navigate, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main>
      <Navigate to="/login" replace />
      <Outlet />
    </main>
  );
};

export default MainLayout;
