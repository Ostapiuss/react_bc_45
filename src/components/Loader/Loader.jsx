import style from './Loader.module.css';

import ClipLoader from 'react-spinners/ClipLoader';

export function Loader() {
  return (
    <div className={style.overlay}>
      <ClipLoader size={250} color="#ff6b0a" className={style.loader} />
    </div>
  );
}
