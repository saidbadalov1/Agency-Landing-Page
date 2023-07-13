import propTypes from 'prop-types';

const Hamburger = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className='w-[12px] h-[10px] flex flex-col gap-1 items-end outline-none border-0'
    >
      <span className='w-[100%] h-[2px] bg-white'></span>
      <span className='w-[70%] h-[2px] bg-white'></span>
      <span className='w-[100%] h-[2px] bg-white'></span>
    </button>
  );
};

Hamburger.propTypes = {
  onClick: propTypes.func,
};

export default Hamburger;
