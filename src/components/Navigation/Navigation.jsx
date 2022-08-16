import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav>
      <NavLink className={s.itemLink} to="/">
        Home
      </NavLink>
      <NavLink className={s.itemLink} to="movies">
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
