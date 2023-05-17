import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

import { NotFoundPage } from 'pages/NotFoundPage';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('../pages/Home/Home'));

const Cards = lazy(() => import('../pages/Cards/Cards'));

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/tweets" element={<Cards />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
