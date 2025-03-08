import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import HomePage from '@/pages/Home';

export const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<div>Error</div>} />
    </>
  ),
  {
    basename: '/soa-app-test',
  }
);
