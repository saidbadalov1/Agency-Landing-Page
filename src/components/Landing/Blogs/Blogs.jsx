import { blogs } from '../../../constants/constants';
import { BlogsCard, Button, HeaderCard } from '../../index';

const Blogs = () => {
  return (
    <div className='py-12 flex flex-col gap-7'>
      <HeaderCard title='Blogs' header='From our Latest Blogs' />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-7'>
        {blogs.map((blog) => (
          <BlogsCard
            key={blog.id}
            title={blog.title}
            header={blog.header}
            subHeader={blog.subHeader}
            image={blog.image}
          />
        ))}
      </div>
      <div className='mx-auto'>
        <Button variant='transparent' color='dark' title='View All' />
      </div>
    </div>
  );
};

export default Blogs;
