import { useEffect } from 'react';
import { Paper } from 'components/Paper'

import style from './Modal.module.css'


export function Modal({children, onClose}){

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
    window.removeEventListener('keydown', onKeyDown);

    };
  }, []);

  const onKeyDown = () => {
   onClose();
  };

  return (
    <div className= {style.overlay}>
      <div className={style.modal}>
      <Paper>
        {children}
      </Paper>
      </div>
    </div>
  )
}
