/**
 * PropTypes의 경우 => 런타임 체킹을 위한 도구
 * 예를 들어 TypeScript의 경우 => 정적 타입 검사 도구
 */
import PropTypes from 'prop-types';  
import './MyButton.css';

// function SomeFunc() {
//   try {
//     someHello()
//   } catch (e) {
//     // 내가 잠을 자고 있을 때 에러가 발생하면 TypeScript는 그것을 우리에 알려줄 수 있을까?
//     // 컴파일하면 TS 코드는 날라가기때문에.. 체크 못해줍니다.
//     // Zod, Yup, Joi, Superstruct, io-ts, tcomb, ajv 등의 라이브러리를 사용해야하고
//     // Sentry 같은 에러 트래킹 서비스를 사용해야합니다.
//   } finally {
//     LogEvent()
//   }
// }

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary 
    ? 'storybook-button--primary' 
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
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
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;