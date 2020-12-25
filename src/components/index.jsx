import { lazy } from 'react';

export { Navbar } from './Navbar/Navbar.component';
export { Loader } from './Loader/Loader.component';
export const Error404 = lazy(() => import('./errors/Error404.component'));
export const Error403 = lazy(() => import('./errors/Error403.component'));
