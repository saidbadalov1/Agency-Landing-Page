import { Mail } from '../../../icons';
import { Button } from '../../index';

const Contact = () => {
  return (
    <div className='py-12'>
      <div className='contact__bg-img rounded-[24px] py-[110px] sm:px-0 px-[100px] flex justify-center items-center'>
        <div className='flex flex-col gap-12 text-white justify-center items-center'>
          <Mail />
          <h2>Do cool things with us.</h2>
          <p className='p2'>
            Stay in the loop with updates from our team and community. Once a
            month.
          </p>
          <div className='bg-white sm:flex justify-between px-2 py-1 rounded-xl'>
            <input
              type='email'
              placeholder='Email'
              className='outline-none border-0 text-dark'
            />
            <Button
              title='Subscribe to newsletter'
              classNames={'w-full sm:mt-0 mt-2'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
