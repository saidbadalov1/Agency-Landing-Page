import PropTypes from 'prop-types';

const FeaturesCard = (props) => {
  const { card } = props;

  return (
    <div className='flex flex-1 items-center  relative flex-col gap-6 text-purple-normal p-11'>
      <card.Icon />
      <p className='!font-[600] text-dark p1'>{card.title}</p>
      <p className='p2 text-grey'>{card.description}</p>
      <div
        className={`py-[16px] absolute right-0 w-[1px] bg-hero_line bottom-0 top-0 ${
          card.id === 2 ? 'hidden' : ''
        }`}
      ></div>
    </div>
  );
};

FeaturesCard.propTypes = {
  card: PropTypes.object,
};

export default FeaturesCard;
