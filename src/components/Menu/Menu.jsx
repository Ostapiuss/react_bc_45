import style from './Menu.module.css';
import { menuConfig } from 'constants/menu';

export function Menu() {
  return (
    <nav className={style.nav}>
    <ul  className={style.navList}>
      {
        menuConfig.map(({ title, image, id }) => {
          return <MenuItem title={title} image={image} id={id}/>
        })
      }
    </ul>
</nav>

  )
}

export function MenuItem({ title, image, id }) {
  return(
    <li className={style.navItem} key={id}>
      <a  className={style.navLink} href="#">
        <img src={image} alt="universities" />
        <span>{title}</span>
      </a>
    </li>
  )
}
