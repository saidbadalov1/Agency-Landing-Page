import PropTypes from 'prop-types';
import { Button, HeaderCard } from '../../index';

const CardWithImage = (props) => {
  const { headerCardProps, buttonProps, image } = props;

  return (
    <div className=' bg-white lg:flex rounded-[32px] relative gap-2 overflow-hidden'>
      <div className='flex-1 py-11 px-5 flex gap-5 flex-col'>
        <HeaderCard
          title={headerCardProps.title}
          position={headerCardProps.position}
          header={headerCardProps.header}
          subHeader={headerCardProps.subHeader}
        />
        <div className='flex gap-3'>
          {buttonProps.map((button) => (
            <Button key={button.id} title={button.name} />
          ))}
        </div>
      </div>
      <div className='flex-1 lg:relative'>
        <div className='lg:absolute right-0 top-0 bottom-0'>
          <img
            src={image}
            className='sm:h-[100%] max-h-[260px] sm:max-h-[100%] w-[100%]'
            alt='mission'
          />
        </div>
      </div>
    </div>
  );
};

CardWithImage.propTypes = {
  headerCardProps: PropTypes.object,
  buttonProps: PropTypes.array,
  image: PropTypes.string,
};

export default CardWithImage;
