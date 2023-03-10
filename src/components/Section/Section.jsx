import PropTypes from 'prop-types';
import { StyledSection } from './StyledSection';
import cn from 'classnames';

export function Section({ children, title, position, icon }) {
  return (
    <StyledSection>
      <h2
        className={cn('section-title', {
          'position-right': position === 'right',
        })}
      >
        {icon && <img src={icon} alt="icon" />}
        {title}
      </h2>
      <div className="section-content">{children}</div>
    </StyledSection>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.string,
  icon: PropTypes.string,
};
