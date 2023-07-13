import PropTypes from 'prop-types';
import { Button, HeaderCard } from '../../index';

const BlogsCard = (props) => {
  const { title, header, subHeader, image } = props;
  return (
    <div className='bg-white w-[100%] p-5 border border-solid border-border rounded-[16px]'>
      <div className='flex flex-col gap-5'>
        <img src={image} className='rounded-lg' alt='blog-1' />
        <HeaderCard
          size='blog'
          title={title}
          position='items-start'
          header={header}
          subHeader={subHeader}
        />
        <Button title='Read more' variant='transparent' color='black' />
      </div>
    </div>
  );
};

BlogsCard.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  subHeader: PropTypes.string,
  image: PropTypes.string,
};

export default BlogsCard;
