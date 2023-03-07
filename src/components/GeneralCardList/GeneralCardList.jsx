import { Paper } from 'components/Paper';
import style from './GeneralCardList.module.css';
import shortid from 'shortid';
import { useState, useEffect } from 'react';

import dots from 'assets/images/dots.svg';
import { ReactComponent as AddIcon } from 'assets/images/add-icon.svg';
import { ReactComponent as DelIcon } from 'assets/images/delete-icon.svg';

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
    setAnchor(e.currentTarget);
  };

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
          <button type="button" className={style.actionBtn}>
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
