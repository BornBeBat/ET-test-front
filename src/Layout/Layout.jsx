import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Suspense fallback={<div>load</div>}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
