import userIcon from '../../assets/images/user-ava-icon.svg'
import style from './Sidebar.module.css';
import { Menu } from 'components/Menu';


export function Sidebar() {
    return (
        <aside className={style.aside}>
            <div className={style.logo}>
            </div>
            <Menu/>
            <div className={style.user}>
                <img src={userIcon} alt="user" />
                <span>Біл Гейтс</span>
            </div>
        </aside>
    )
}

