import { useEffect } from 'react';
import {createPortal} from 'react-dom';
import { Paper } from 'components/Paper';
import {ReactComponent as CloseIcon} from 'assets/images/close-icon.svg'

import style from './Modal.module.css'

const modalElement = document.querySelector("#modal");

export function Modal({children, onClose, open}){

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
    window.removeEventListener('keydown', onKeyDown);

    };
  }, []);

  const onKeyDown = (keyEvent) => {
    if(keyEvent.code === 'Escape'){
     onClose();
    }
  };
if(open){
  return createPortal((
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
  ), modalElement)
}
}
