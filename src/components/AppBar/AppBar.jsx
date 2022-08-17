import Navigation from '../Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import './AppBar.module.css';
export default function AppBar() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
