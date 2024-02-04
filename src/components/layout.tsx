import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainNav } from './main-nav';

const Layout = () => {
  return (
    <main className="md:h-screen max-h-screen min-h-screen pb-8 md:pb-0 flex flex-col gap-3 container">
      <header className="flex flex-row justify-between h-20 py-2">
        <MainNav />
      </header>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
