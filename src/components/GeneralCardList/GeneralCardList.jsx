import { Paper } from 'components/Paper';
import style from './GeneralCardList.module.css';
import shortid from 'shortid';
import { useState, useEffect } from 'react';
import {Modal} from '../Modal';
import cn from 'classnames';

import dots from 'assets/images/dots.svg';
import { ReactComponent as AddIcon } from 'assets/images/add-icon.svg';
import { ReactComponent as DelIcon } from 'assets/images/delete-icon.svg';
import { EditModal } from 'shared/modals/EditModal';

export function GeneralCardList({ list, className, isFullItemWidth, onEditCard }) {
  const [isOpenModal, setIsOpenModal] =useState(false);
  const [itemId, setItemId] = useState(null);
  return (
    <>
    <div className={cn(style.cardList, className)}>
      {list.map((item) => (
        <GeneralCard
          name={item.name}
          id={item.id}
          key={shortid()}
          setItemId={setItemId}
          isFullItemWidth={isFullItemWidth}
          setIsOpenModal={setIsOpenModal}
        />
      ))}
    </div>
       {
        isOpenModal && (
          <Modal onClose={()=>setIsOpenModal(false)}>
            <EditModal placeholder="Міста" onSubmit={()=>{onEditCard(itemId)}}/>
          </Modal>
        )
      }
      </>
  );
}

function GeneralCard({ name, id, isFullItemWidth, setIsOpenModal, setItemId }) {
  const [anchor, setAnchor] = useState(null);


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
  setAnchor(null);
  setIsOpenModal(true);
  setItemId(id);
  }

  return (
    <Paper className={cn(style.generalCard, {[style.itemFullWidth]: isFullItemWidth })}>
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
    </Paper>
  );
}
