import { useEffect } from 'react';
import { Paper } from 'components/Paper';
import {ReactComponent as CloseIcon} from 'assets/images/close-icon.svg'

import style from './Modal.module.css'


export function Modal({children, onClose}){

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
    window.removeEventListener('keydown', onKeyDown);

    };
  }, []);

  const onKeyDown = () => {
  //  onClose();
  };

  return (
    <div className= {style.overlay}>
      <div className={style.modal}>
      <Paper className={style.modalContent}>
        <div className={style.wrapperModalBtn}>
          <button className={style.buttonIcon} onClick={onClose}>
          <CloseIcon/>
          </button>
        </div>
        {children}
      </Paper>
      </div>
    </div>
  )
}
