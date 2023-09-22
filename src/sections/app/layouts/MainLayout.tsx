import { Outlet, Navigate } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Navigate to="/login" replace />
    </>
  );
};

export default MainLayout;
