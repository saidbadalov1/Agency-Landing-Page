import PropTypes from 'prop-types';

const Button = (props) => {
  const { variant, title, color } = props;
  return (
    <button
      className={`${variant ? `bg-${variant}` : 'bg-purple-normal'} ${
        color ? `text-${color}` : 'text-white'
      }  px-7 py-2 font-medium rounded-[20px] hover:bg-opacity-80 transition-colors duration-300`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
