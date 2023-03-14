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
  const [item, setItem] = useState(null);

  function onCloseModal(){
    setIsOpenModal(false);
  }

  return (
    <>
    <div className={cn(style.cardList, className)}>
      {list.map((item) => (
        <GeneralCard
          name={item.name}
          id={item.id}
          key={shortid()}
          setItem={setItem}
          isFullItemWidth={isFullItemWidth}
          setIsOpenModal={setIsOpenModal}
        />
      ))}
    </div>
       {
        isOpenModal && (
          <Modal onClose={onCloseModal}>
            <EditModal
              modalData={item}
              placeholder="Міста"
              onSubmit={onEditCard}
              onClose={onCloseModal}
            />
          </Modal>
        )
      }
      </>
  );
}

function GeneralCard({ name, id, isFullItemWidth, setIsOpenModal, setItem }) {
  const [anchor, setAnchor] = useState(null);


  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);

    };
  }, []);


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
  setItem({name, id});
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
