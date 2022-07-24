import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoutes = () => {
  const location = useLocation();

  const token = localStorage.getItem('jwt');
  return (
    <>
      {token ? (
        <Outlet />
      ) : (
        <Navigate
          to={process.env.PUBLIC_URL + '/signin'}
          state={{ from: location }}
          replace
        />
      )}
    </>
  );
};

export default PrivateRoutes;
