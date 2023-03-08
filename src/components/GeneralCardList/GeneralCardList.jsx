import { Paper } from 'components/Paper';
import style from './GeneralCardList.module.css';
import shortid from 'shortid';
import { useState, useEffect } from 'react';
import {Modal} from '../Modal';

import dots from 'assets/images/dots.svg';
import { ReactComponent as AddIcon } from 'assets/images/add-icon.svg';
import { ReactComponent as DelIcon } from 'assets/images/delete-icon.svg';
import { EditModal } from 'shared/modals/EditModal';

export function GeneralCardList({ list }) {
  return (
    <div className={style.cardList}>
      {list.map((item, index) => (
        <GeneralCard name={item.name} key={shortid()} />
      ))}
    </div>
  );
}

function GeneralCard({ name }) {
  const [anchor, setAnchor] = useState(null);
  const [isOpenModal, setIsOpenModal] =useState(false);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    // window.addEventListener('click', onOutsideClick);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      // window.removeEventListener('click', onOutsideClick);
    };
  }, []);

  // const onOutsideClick = e => {
  //   if(anchor){
  //     setAnchor(null);
  //     return;
  //   }
  //   setAnchor(e.currentTarget);
  // }

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      setAnchor(null);
    }
  };

  const handlerAnchorClick = e => {
    if(anchor){
      setAnchor(null);
      return;
    }
    setAnchor(e.currentTarget);
  };

  const handleOpenModal= () =>{
  setIsOpenModal(true)
  }

  return (
    <Paper className={style.generalCard}>
      <p>{name}</p>
      <button
        type="button"
        className={style.generalCardBtn}
        onClick={handlerAnchorClick}
      >
        <img src={dots} alt="dots" />
      </button>
      {anchor && (
        <div className={style.action}>
          <button type="button" className={style.actionBtn} onClick={handleOpenModal}>
            <AddIcon className={style.actionIcon} />
            Редагувати
          </button>
          <button type="button" className={style.actionBtn}>
            <DelIcon className={style.actionIcon} />
            Видалити
          </button>
        </div>
      )}
      {
        isOpenModal && (
          <Modal onClose={()=>setIsOpenModal(false)}>
            <EditModal placeholder="Міста"/>
          </Modal>
        )
      }
    </Paper>
  );
}
