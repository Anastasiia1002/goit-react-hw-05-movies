import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import s from './Layout.module.css';

const setActiveStyle = ({ isActive }) =>
  isActive ? { color: 'rgb(239, 131, 230)', fontWeight: 'bold' } : null;
const Layout = () => {
  return (
    <>
      <nav
        className={s.nav}
        // style={
        // }}
      >
        <NavLink className={s.link} style={setActiveStyle} to="/" end>
          Home
        </NavLink>
        <NavLink className={s.link} style={setActiveStyle} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
