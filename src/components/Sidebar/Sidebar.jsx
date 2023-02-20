import userIcon from '../../assets/images/user-ava-icon.svg'
import universitiesIcon from '../../assets/images/universities.svg'
import facultiesIcon from '../../assets/images/faculties.svg'
import style from './Sidebar.module.css';


function Sidebar() {
    return (
        <aside className={style.aside}>
            <div className={style.logo}>

            </div>
            <nav className={style.nav}>
                <ul  className={style.navList}>
                    <li className={style.navItem}>
                        <a  className={style.navLink} href="#">
                            <img src={universitiesIcon} alt="universities" />
                            <span>Університет</span>
                        </a>
                    </li>
                    <li className={style.navItem}>
                        <a className={style.navLink}  href="#">
                            <img src={facultiesIcon} alt="faculties" />
                            <span>Факультет</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={style.user}>
                <img src={userIcon} alt="user" />
                <span>Біл Гейтс</span>
            </div>
        </aside>
    )
}

export default Sidebar