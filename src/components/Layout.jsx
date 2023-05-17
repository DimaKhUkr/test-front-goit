import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { WrapperHeader, WrapperMain } from './Layout.styled';
import { Loader } from './Loader/Loader';
import { Navigation } from './Navigation/Navigation';
export const Layout = () => {
  return (
    <div>
      <WrapperHeader>
        <Navigation />
      </WrapperHeader>
      <WrapperMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapperMain>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
