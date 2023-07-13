import PropTypes from 'prop-types';
import { Button, HeaderCard } from '../../index';

const CardWithImage = (props) => {
  const { headerCardProps, buttonProps, image } = props;

  return (
    <div className=' bg-white flex rounded-[32px] relative gap-2 overflow-hidden'>
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
      <div className='flex-1 relative'>
        <div className='absolute right-0 top-0 bottom-0'>
          <img src={image} className='h-[100%]' alt='mission' />
        </div>
      </div>
    </div>
  );
};

CardWithImage.propTypes = {
  headerCardProps: PropTypes.object,
  buttonProps: PropTypes.object,
  image: PropTypes.string,
};

export default CardWithImage;
