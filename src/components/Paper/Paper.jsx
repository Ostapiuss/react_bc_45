import PropTypes from 'prop-types';
import style from './Paper.module.css';
import cn from 'classnames';

export function Paper({ children, className, onClick }) {
  return <div className={cn(style.paper, className)} onClick={onClick}>{children}</div>;
}

Paper.propTypes = {
  className: PropTypes.string,
};
