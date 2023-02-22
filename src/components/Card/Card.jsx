import PropTypes from 'prop-types';

import { Paper } from 'components/Paper';

import universityIcon from 'assets/images/universityIcon.svg';
import editIcon from 'assets/images/edit.svg';
import deleteIcon from 'assets/images/delete-icon.svg';

import style from './Card.module.css';

export function Card({ universityName }) {
  return (
    <Paper className={style.universityCard}>
      <div className={style.universityContainer}>
        <img
          className={style.universityIcon}
          src={universityIcon}
          alt="University img"
        />
        <p className={style.universityText}>Університети</p>
        <h3 className={style.universityTitle}>{universityName}</h3>
        <div className={style.universityBtnContainer}>
          <button className={style.universityBtn}>
            <img src={editIcon} alt="Редагування" />
          </button>
          <button className={style.universityBtn}>
            <img src={deleteIcon} alt="Видалення" />
          </button>
        </div>
      </div>
    </Paper>
  );
}

Card.propTypes = {
  universityName: PropTypes.string,
};
