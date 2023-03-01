import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './Button.module.css';

import addIcon from 'assets/images/add-icon.svg';

export function Button({ title, onClick, className, ...restProps }) {
  return (
    <button className= {cn(style.button, className)} {...restProps} type="button" onClick={onClick}>
      <img src={addIcon} alt="Add icon" />
      {title.toUpperCase()}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
