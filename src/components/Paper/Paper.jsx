import style from './Paper.module.css';

export function Paper({ children }) {
  return <div className={style.paper}>{children}</div>;
}
