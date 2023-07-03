/**
 * PropTypes의 경우 => 런타임 체킹을 위한 도구
 * 예를 들어 TypeScript의 경우 => 정적 타입 검사 도구
 */
import PropTypes from 'prop-types';  
import './MyButton.css';

const Button = ({ primary, backgroundColor, radius, size, label, ...props }) => {
  const mode = primary 
    ? 'storybook-button--primary' 
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={
        (backgroundColor && { backgroundColor },
        radius ? { borderRadius: radius + 'px' } : { borderRadius : 0 })
      }
      {...props} // JS 문법에서 나머지 매개변수를 의미함. <Button a, b, c, d, e /> (Rest Parameters)
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  radius: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  radius: null,
  onClick: undefined,
};

export default Button;