import style from './Menu.module.css';
import { menuConfig } from 'constants/menu';
import PropTypes from 'prop-types';

export function Menu() {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        {menuConfig.map(({ title, image, id }) => {
          return <MenuItem title={title} image={image} key={id} />;
        })}
      </ul>
    </nav>
  );
}

export function MenuItem({ title, image }) {
  return (
    <li className={style.navItem}>
      <a className={style.navLink} href="#">
        <img src={image} alt="universities" />
        <span>{title}</span>
      </a>
    </li>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};
