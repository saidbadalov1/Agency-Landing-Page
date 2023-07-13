import PropTypes from 'prop-types';

const StatisticsCard = (props) => {
  const { card } = props;
  return (
    <div className='flex flex-1  relative flex-col text-purple-normal'>
      <h2 className='font-[600]'>{card.count}</h2>
      <p className='p1'>{card.title}</p>

      <div
        className={`py-[16px] absolute right-0 w-[1px] bg-hero_line bottom-0 top-0 ${
          card.id === 2 ? 'hidden' : ''
        }`}
      ></div>
    </div>
  );
};

StatisticsCard.propTypes = {
  card: PropTypes.object,
};

export default StatisticsCard;
