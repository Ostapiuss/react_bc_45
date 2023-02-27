import PropTypes from 'prop-types';

import style from './Button.module.css';

import addIcon from 'assets/images/add-icon.svg';

export function Button({ title, onClick }) {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      <img src={addIcon} alt="Add icon" />
      {title.toUpperCase()}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
