import style from './Main.module.css';

export function Main({ children }) {
  return <main className={style.main}>{children}</main>;
}
