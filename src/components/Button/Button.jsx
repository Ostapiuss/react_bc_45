import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './Button.module.css';

import {ReactComponent as AddIcon} from 'assets/images/add-icon.svg';


export function Button({ title, onClick, className, ...restProps }) {
  return (
    <button
      className={cn(style.button, className)}
      type="button"
      onClick={onClick}
      {...restProps}
    >
     <AddIcon className={style.btnIcon}/>
      {title.toUpperCase()}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
