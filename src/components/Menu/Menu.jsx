import style from './Menu.module.css';
import { menuConfig } from 'constants/menu';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export function Menu() {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        {menuConfig.map(({ title, image, id, pathName }) => {
          return (
            <MenuItem title={title} image={image} path={pathName} key={id} />
          );
        })}
      </ul>
    </nav>
  );
}

export function MenuItem({ title, image, path }) {
  return (
    <li className={style.navItem}>
      <NavLink
        className={navData => (navData.isActive ? style.active : style.navLink)}
        to={path}
      >
        <img src={image} alt={path} />
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};
