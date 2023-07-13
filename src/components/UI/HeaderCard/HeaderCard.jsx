import PropTypes from 'prop-types';

const HeaderCard = (props) => {
  const { title, header, subHeader, position, size } = props;
  return (
    <div
      className={`flex flex-col  ${
        position ? position : 'items-center text-center'
      } gap-5`}
    >
      <div className='px-4 py-1 p2 border border-solid border-[#EEE2FE] rounded-[22px] text-purple-normal bg-gradientColor'>
        {title}
      </div>
      {header && (
        <h2
          className={`text-dark ${
            size === 'blog' ? 'text-lg tracking-tight font-medium' : ''
          }`}
        >
          {header}
        </h2>
      )}
      {subHeader && <p className='p2 text-grey'>{subHeader}</p>}
    </div>
  );
};

HeaderCard.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  subHeader: PropTypes.string,
  position: PropTypes.string,
  size: PropTypes.string,
};

export default HeaderCard;
