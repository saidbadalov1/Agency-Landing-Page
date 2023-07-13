import PropTypes from 'prop-types';

const Button = (props) => {
  const { variant, title, color, classNames } = props;
  return (
    <button
      className={`${variant ? `bg-${variant}` : 'bg-purple-normal'} ${
        color ? `text-${color}` : 'text-white'
      } ${classNames}  px-7 py-2 font-medium sm:text-[16px] text-xs rounded-[20px] hover:bg-opacity-80 transition-colors duration-300`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  classNames: PropTypes.string,
};

export default Button;
